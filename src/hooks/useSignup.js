import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../api/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
    onError: () => {
      toast.error("Error creating account");
    },
  });
  return { signup, isLoading };
}
