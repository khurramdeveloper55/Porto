import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../api/supabase";

export default function Login() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email: registerData.email,
      password: registerData.password,
      options: {
        data: { username: registerData.username },
      },
    });
    if (error) {
      alert("Registration failed: " + error.message);
    } else {
      alert("Registration successful! Please log in.");
    }
    setRegisterData({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });
    if (error) {
      alert("Login failed: " + error.message);
    } else {
      alert("Login successful!");
      navigate("/shop");
    }
    setLoginData({
      email: "",
      password: "",
    });
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
          <h2 className="text-2xl font-semibold text-left text-zinc-800 mb-3">
            Login
          </h2>
          <div className="text-left mb-3">
            <label htmlFor="" className="text-neutral-500 ">
              Username or email address *
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border-[1px]"
              value={loginData.email}
              onChange={handleLoginChange}
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
              value={loginData.password}
              onChange={handleLoginChange}
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
              value={registerData.username}
              onChange={handleRegisterChange}
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
              value={registerData.email}
              onChange={handleRegisterChange}
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
              value={registerData.password}
              onChange={handleRegisterChange}
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
