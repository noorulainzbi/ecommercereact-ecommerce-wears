import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border-t">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
      >
        <div className="inline-flex items-center gap-2 mt-10 mb-2">
          <p className="prata-regular text-xl">{currentState}</p>
          <hr className=" border-none w-8 h-[1.5px] bg-black" />
        </div>
        {currentState === "Sign Up" ? (
          <input
            type="text"
            className="w-full border border-gray-800 px-3 py-2 rounded-sm"
            placeholder="Name"
            required
          />
        ) : (
          ""
        )}
        <input
          type="email"
          className="w-full border border-gray-800 px-3 py-2 rounded-sm"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full border border-gray-800 px-3 py-2 rounded-sm"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between mt-[-8px]">
          <p className="cursor-pointer">Forgor password</p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create Account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </p>
          )}
        </div>
        <button className="bg-black text-white  font-light px-8 py-2 mt-4 cursor-pointer">
          {currentState === "Login" ? "Signin" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Login;
