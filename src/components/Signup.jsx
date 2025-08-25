import React from "react";
import { Input, Button } from "./index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import authServices from "../appwrite/authServices.js";
import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice.js";
import { useDispatch } from "react-redux";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setError] = useState("");

  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords didn't match . Please check.");
      }
      setIsLoading(true);
      const userCreated = await authServices.signup(
        data.username,
        data.email,
        data.password
      );
      const userProfile = await authServices.createUserProfile(
        data.firstName,
        data.lastName,
        data.username,
        data.email,
        data.phoneNo,
        userCreated.userId
      );

      if (userCreated && userProfile) {
        const userData = await authServices.getCurrentUser();
        if (userData) {
          dispatch(login(userData?.targets[0].userId));
          toast.success("Regisration successfull");
          naviagte("/");
        }
      }
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
      console.log("Sign up error on register page: ", error);
    } finally {
      setIsLoading(false);
    }
  };
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
      <div className="my-5 " onSubmit={handleSubmit(onSubmit)}>
        <form action="" className="space-y-3 w-full ">
          <Input
            type="text"
            lable="First Name"
            placeholder="first name"
            {...register("firstName", {
              required: "Required",
              minLength: {
                value: 2,
                message: "Must have atleast 2 characters",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500"> {errors.firstName.message} </p>
          )}
          <Input
            type="text"
            lable="Last Name"
            placeholder=" last name"
            {...register("lastName", {
              required: "Required",
              minLength: {
                value: 2,
                message: "Must have alteast 2 characters",
              },
            })}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
          <Input
            type="text"
            lable="Username"
            placeholder="username"
            {...register("username", {
              required: "Required",
              minLength: {
                value: 3,
                message: "Must have alteast 3 characters",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <Input
            type="email"
            lable="Email"
            placeholder="email"
            {...register("email", {
              required: "Required",
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            type="text"
            lable="Phone no"
            placeholder="phone no"
            {...register("phoneNo", {
              required: "Required",
              minLength: {
                value: 10,
                message: "Phone no less than 10 digits",
              },
            })}
          />
          {errors.phoneNo && (
            <p className="text-red-500">{errors.phoneNo.message}</p>
          )}
          <Input
            type="password"
            lable="Password"
            placeholder="password"
            {...register("password", {
              required: "Required",
              minLength: {
                value: 6,
                message: "Must have alteast 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Input
            type="password"
            lable="Confirm password"
            placeholder="re-enter password"
            {...register("confirmPassword", {
              required: "Required",
              minLength: {
                value: 6,
                message: "Must have alteast 6 characters",
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <Button>
            {" "}
            {isLoading ? <LoaderCircle className="animate-spin" /> : "Register"}
          </Button>
        </form>
        {signUpError && <p className="text-red-500">{signUpError}</p>}
      </div>
      <p className="text-center text-lg">Already registered?</p>

      <Link to={"/login"}>
        <p className="text-center text-gray-500 text-lg hover:text-gray-700 hover:cursor-pointer">
          Login
        </p>
      </Link>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default Signup;
