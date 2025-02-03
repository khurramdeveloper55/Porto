import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";

export default function Login() {
  const [email, setEmail] = useState("khurram@gmail.com");
  const [registerEmail, setRegisterEmail] = useState("");
  const [password, setPassword] = useState("avenger2027");
  const [registerPassword, setRegisterPassword] = useState("");
  const [username, setUsername] = useState("");
  const { login, isLoading } = useLogin();
  const { signup } = useSignup();
  const handleRegister = () => {
    signup({ username, email, password });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  };
  return (
    <>
      <div className=" w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  relative">
        <div className="flex justify-center flex-col items-center bg-neutral-100 py-16 ">
          <div className="text-center text-neutral-400 text-xs flex flex-row justify-center items-center mb-0">
            <span className="text-md uppercase text-indigo-500">
              <Link to="/">Home</Link>
            </span>{" "}
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>{" "}
            <span className="text-md uppercase">My Account</span>
          </div>
          <h2 className="block text-center text-3xl font-bold">My account</h2>
        </div>
      </div>

      <div className="my-16 flex gap-8">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-left text-zinc-800 mb-3 flex gap-2">
            Login{" "}
            <span className="text-[15px] text-neutral-500 font-normal">
              (Already have account)
            </span>
          </h2>
          <div className="text-left mb-3">
            <label htmlFor="" className="text-neutral-500 ">
              Username or email address *
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border-[1px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-left mb-3">
            <label htmlFor="" className="text-neutral-500 ">
              Password *
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border-[1px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="uppercase w-full bg-zinc-800 font-semibold text-white mt-1 py-3"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-left text-zinc-800 mb-3">
            Register
          </h2>
          <div className="text-left mb-3">
            <label htmlFor="" className="text-neutral-500 ">
              Username *
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border-[1px]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text-left mb-3">
            <label htmlFor="" className="text-neutral-500 ">
              Email address *
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border-[1px]"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="text-left mb-3">
            <label htmlFor="" className="text-neutral-500 ">
              Password *
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border-[1px]"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <button
            className="uppercase w-full bg-zinc-800 font-semibold text-white mt-1 py-3"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
