import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../api/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      alert("Account successfully created!");
    },
  });
  return { signup, isLoading };
}
