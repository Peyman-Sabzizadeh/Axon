import { useSettings } from "@/hooks/useSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useUpdateSetting } from "@/hooks/useUpdateSetting";

function SettingForm() {
  const { Settings, isPending: isLoadingSetting } = useSettings();
  const setting = Settings?.at(0);
  const user_per_page = setting?.user_per_page || "";
  const [userPerPage, setUserPerPage] = useState<number | string>("");
  useEffect(
    function () {
      if (setting?.user_per_page) setUserPerPage(user_per_page);
    },
    [setting, user_per_page],
  );
  const { updateSetting, isUpdating } = useUpdateSetting();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateSetting(userPerPage);
  }
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <h3>User per page</h3>
      <Input
        type="number"
        className="w-48"
        placeholder="ex : 5"
        value={userPerPage}
        disabled={isLoadingSetting || isUpdating}
        onChange={(e) => setUserPerPage(e.target.value)}
      />
      <Button
        disabled={isLoadingSetting || isUpdating}
        className="cursor-pointer bg-indigo-500 hover:bg-indigo-600"
      >
        Submit
      </Button>
    </form>
  );
}
export default SettingForm;
