import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  });
  return (
    <>
      <div className=" w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  relative">
        <div className="flex justify-center flex-col items-center bg-neutral-100 py-16 ">
          <h2 className="block text-center text-3xl font-bold">
            Welcome Back {username}
          </h2>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-left text-2xl font-semibold text-zinc-800 mb-4">
          My Orders
        </h2>
        <div className="py-16 bg-neutral-100">
          <p>You have not ordered anything yet</p>
        </div>
      </div>
    </>
  );
}
