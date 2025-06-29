import React from "react";
import { Input, Button } from "./index";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="border-2 border-gray-600 rounded-lg m-5 p-10">
      {/* Main heading */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold  text-center">
          Join Idea Lab
        </h1>
        <h2 className="text-xl text-center">
          Make the world a better place by sharing your ideas and thoughts
        </h2>
      </div>

      {/* Registration form */}
      <div className="my-5 ">
        <form action="" className="space-y-3 w-full ">
          <Input type="text" lable="Name" />
          <Input type="email" lable="Email" />
          <Input type="text" lable="Phone no" />
          <Input type="password" lable="Password" />
          <Input type="password" lable="Confirm password" />
          <Button title="Register" type="submit" />
        </form>
      </div>
      <p className="text-center text-lg">Already registered?</p>

      <Link to={"/login"}>
        <p className="text-center text-gray-500 text-lg hover:text-gray-700 hover:cursor-pointer">
          Login
        </p>
      </Link>
    </div>
  );
}

export default Signup;
