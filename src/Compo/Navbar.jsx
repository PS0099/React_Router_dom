import React from "react";
import { Link,  } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-2 bg-gray-200 items-center">
      <div className="flex items-center w-[40px] h-[40px] ">
        <Link to="/content">
          <img
            src="data:image/jpeg;base64,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"
            alt="UpskillMafia"
            className="rounded-full"
          />
        </Link>
      </div>
      <Link to="/Home">
        <h1 className="font-bold text-xl">Home</h1>
      </Link>
      <div className=" flex items-center space-x-4">
        <Link to="/Login">
          <button className="bg-green-500  p-2 rounded-md text-sm font-bold w-20">
            Login
          </button>
        </Link>
        <Link to="/SignUp">
          {" "}
          <button className="bg-green-500 p-2 rounded-md text-sm font-bold w-20">
            SignUp
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
