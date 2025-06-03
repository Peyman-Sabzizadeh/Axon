import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSettings } from "@/hooks/useSettings";

function Settings() {
  const { Settings } = useSettings();
  return (
    <form className="space-y-3">
      <h3>User per page</h3>
      <Input type="number" className="w-48" placeholder="ex : 5" />
      <Button className="cursor-pointer bg-indigo-500 hover:bg-indigo-600">
        Submit
      </Button>
    </form>
  );
}
export default Settings;
