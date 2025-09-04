import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import blogPostServices from "../appwrite/blogPostServices";
import { Loader2 } from "lucide-react";

function NewLattercard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await blogPostServices.subscribeToNewsletter(data);
      toast.success("Subscribed to Newsletter 🎉");
    } catch (error) {
      console.log("Error submitting email:", error);
      toast.error(error.message || "Subscription failed");
    } finally {
      setIsLoading(false);
      reset(); // clears form after submit
    }
  };

  return (
    <div>
      <div className="mt-15 md:mx-10 sm:mx-8 mx-5 rounded-t-2xl bg-[#C35642] grid md:grid-cols-2 grid-cols-1">
        <div className="sm:p-20 p-10">
          <h1 className="font-extrabold transform scale-y-105 sm:text-6xl text-4xl mb-5 text-white">
            <span className="md:block">Subscribe to</span>
            <span> Our Newsletter</span>
          </h1>
          <p className="text-white font-extralight text-justify">
            Stay up-to-date on the latest trends, insights, and ideas in
            branding, design, and digital marketing by subscribing to Idea Lab's
            newsletter.
          </p>
        </div>
        <div className="md:p-20 p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap md:flex-row flex-col items-center gap-3"
          >
            {/* Name Input */}
            <div className="w-full">
              <input
                type="text"
                placeholder="YOUR NAME"
                {...register("name", { required: "Name is required" })}
                className="rounded-3xl my-2 px-5 py-2 border border-amber-100 text-white placeholder:text-gray-200 w-full focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                {...register("email", { required: "Email is required" })}
                className="rounded-3xl my-2 px-5 py-2 border border-amber-100 text-white placeholder:text-gray-200 w-full focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl px-5 py-2 bg-[#E2AD28] text-black font-semibold hover:bg-[#e2c028] hover:cursor-pointer flex items-center justify-center"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default NewLattercard;
