"use client";
import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const Auth = () => {
  const [isLogin, isRegister] = useState(true);

  const handlerClick = () => {
    isRegister(isLogin === true ? false : true);
  };
  return (
    <main className="flex flex-col items-center justify-start mt-5 gap-5 h-full w-full">
      <div className="" title="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="non-italic font-semibold text-2xl leading-8 text-black">
          Welcome back !
        </p>
        <h2 className="leading-9 font-bold text-4xl text-colorOne">
          Login to your account
        </h2>
      </div>
      <div>
        {isLogin && <Login />}
        {!isLogin && <Register />}
        <button
          onClick={handlerClick}
          className="flex flex-row font-sans mt-1 rounded items-center justify-center w-96 h-16  text-checkBox border border-2 text-2xl font-semibold"
          type="submit"
        >
          {!isLogin === true ? "Login" : "Register"}
        </button>
      </div>
    </main>
  );
};

export default Auth;
