import { Input, Button } from "./index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import authServices from "../appwrite/authServices.js";
import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { login } from "../store/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EyeClosed, Eye, Mail } from "lucide-react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const session = await authServices.login(data.email, data.password);

      if (session) {
        const userData = await authServices.getCurrentUser();
        if (userData) {
          const userDetails = await authServices.getUserDetailsUsingUserId(
            userData?.targets[0].userId
          );
          if (userDetails) {
            dispatch(
              login({
                userId: userData?.targets[0].userId,
                userDetailsId: userDetails.documents[0].$id,
                username: userDetails.documents[0].username,
              })
            );
            toast.success("Login successful");
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.log("Login error", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // password visibiliy switch variables
  const [passwordVisiblity, setPasswordVisiblity] = useState(false);

  function toggleVisibility() {
    setPasswordVisiblity((prev) => !prev);
  }

  return (
    <div className="border-2 border-gray-600 rounded-lg m-5 p-10">
      {/* Main heading */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold  text-center">
          Login to Idea Lab
        </h1>
        <h2 className="text-xl text-center">Share your thoughts and ideas</h2>
      </div>

      {/* Login form */}
      <div className="mt-5 ">
        <form
          action=""
          className="space-y-3 w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("email", {
              required: "Required",
            })}
            type="email"
            lable="Email"
            placeholder="email"
            rightIcon={<Mail />}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            {...register("password", {
              required: "Required",
            })}
            type={passwordVisiblity ? "text" : "password"}
            lable="Password"
            placeholder="password"
            className="relative"
            rightIcon={
              passwordVisiblity ? (
                <EyeClosed
                  onClick={toggleVisibility}
                  className="cursor-pointer"
                />
              ) : (
                <Eye onClick={toggleVisibility} className="cursor-pointer" />
              )
            }
          />

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Button type="submit" className="mt-4">
            {isLoading ? <LoaderCircle className="animate-spin" /> : "Login"}
          </Button>
        </form>
      </div>

      {/* register */}
      <div className="flex flex-col items-center mt-5">
        <p className="text-lg">Don't have account?</p>
        <Link to={"/register"}>
          <p className="text-gray-500 text-lg hover:text-gray-700 hover:cursor-pointer">
            Register
          </p>
        </Link>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default Login;
