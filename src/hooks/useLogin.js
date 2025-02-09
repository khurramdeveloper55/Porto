import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/apiAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      toast.success("Logged in successfully");

      dispatch(setUser(data.user));
      navigate("/shop");
    },
    onError: () => {
      toast.error("Email or password is incorrect");
    },
  });
  return { login, isLoading };
}
