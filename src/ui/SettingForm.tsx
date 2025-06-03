import type React from "react";
import { useSettings } from "@/hooks/useSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

function SettingForm() {
  const { Settings } = useSettings();
  const setting = Settings?.at(0);
  const user_per_page = setting?.user_per_page || "";
  const [userPerPage, setUserPerPage] = useState();
  useEffect(
    function () {
      if (setting?.user_per_page) setUserPerPage(user_per_page);
    },
    [setting, user_per_page],
  );
  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <h3>User per page</h3>
      <Input
        type="number"
        className="w-48"
        placeholder="ex : 5"
        value={userPerPage}
        onChange={(e) => setUserPerPage(e.target.value)}
      />
      <Button className="cursor-pointer bg-indigo-500 hover:bg-indigo-600">
        Submit
      </Button>
    </form>
  );
}
export default SettingForm;
