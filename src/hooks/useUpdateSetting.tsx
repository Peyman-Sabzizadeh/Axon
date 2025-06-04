import { updateSetting as updateSettingApi } from "@/lib/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      alert("Setting updated");
      queryClient.invalidateQueries({ queryKey: ["Settings"] });
    },
    onError: (err) => {
      alert(`Something went wrong : ${err.message}`);
    },
  });
  return { updateSetting, isUpdating };
}
