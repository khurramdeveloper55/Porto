import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/apiAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log(data.user.user_metadata.username);
      dispatch(setUser(data.user));
      navigate("/shop");
    },
  });
  return { login, isLoading };
}
