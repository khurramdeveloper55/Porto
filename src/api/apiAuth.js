import supabase from "./supabase";
import { clearUser } from "../redux/slices/userSlice";
export async function signup({ username, registerEmail, registerPassword }) {
  const email = registerEmail;
  const password = registerPassword;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export const logout = () => async (dispatch) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout Error: ", error.message);
    return;
  }
  dispatch(clearUser());
};
