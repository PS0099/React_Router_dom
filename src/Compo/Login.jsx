import React from "react";

function Login() {
  return (
    <form className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[20%]">
        <h1 className="font-bold text-3xl mb-3 text-center">Login</h1>
        <label htmlFor="email">Email :</label>
        <br />
        <input type="email" id="email" className="bg-blue-100 rounded h-8 w-full" />
        <br />
        <label htmlFor="password">Password :</label>
        <br />
        <input
          type="password"
          id="password"
          className="bg-blue-100 rounded h-8 w-full"
        />
        <br />
        <button className="bg-green-600 text-white rounded p-1 mt-3 w-full ">
          Login</button>
      </div>
    </form>
  );
}

export default Login;
