import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button, SelectInput, TagsCard } from "./";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function PostForm() {
  const allCategories = [
    "Design and Branding",
    "Website Development",
    "App Development",
    "Social Media",
    "Marketing Strategy",
    "Video Production",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    isLoading,
  } = useForm();

  async function onSubmit(data) {
    return data;
  }

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="mx-2 mt-5 sm:p-10 p-1">
      {/* Main heading */}
      <h1 className="text-2xl sm:text-3xl font-bold  text-center">
        Upload Your Post
      </h1>

      <div className="bg-gray-300 h-0.5 mt-3 w-full"></div>

      {/* post uploading form */}
      <div className="my-5 " onSubmit={handleSubmit(onSubmit)}>
        <form action="" className="space-y-3 w-full ">
          <Input
            type="text"
            label="Title "
            placeholder="title"
            {...register("title", {
              required: "Required",
              minLength: {
                value: 6,
                message: "Must have atleast 6 characters",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500"> {errors.title.message} </p>
          )}
          <Input
            type="text"
            label="Slug"
            placeholder="slug"
            {...register("slug", {
              required: "Required",
              minLength: {
                value: 5,
                message: "Must have alteast 5 characters",
              },
            })}
          />
          {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}

          <label htmlFor="content" className="m-1 p-2 font-medium">
            Content
          </label>

          <label htmlFor="excrept" className="ml-2 font-medium">
            Excerpt
          </label>
          <textarea
            id="excrept"
            placeholder="excerpt"
            {...register("excerpt", {
              required: "Required",
              minLength: {
                value: 10,
                message: "Must have alteast 10 characters",
              },
            })}
            rows="4"
            cols="100"
            className="border-2 mt-3 border-gray-200 p-3 block w-full rounded-lg"
          />
          {errors.excerpt && (
            <p className="text-red-500">{errors.excerpt.message}</p>
          )}

          <Input
            type="file"
            label="Upload cover image"
            {...register("coverImage", {
              required: "Cover image required",
              validate: {
                lessThan2MB: (coverImage) =>
                  coverImage[0]?.size < 2 * 1024 * 1024 ||
                  "Cover image larger then 2MB",
                acceptOnlyJpeg: (coverImage) =>
                  ["image/jpeg", "image/png"].includes(coverImage[0]?.type) ||
                  "Only JPG/PNG files are allowed",
              },
            })}
          />
          {errors.coverImage && (
            <p className="text-red-500">{errors.coverImage.message}</p>
          )}

          <TagsCard />

          <SelectInput
            name="category"
            label="Select category"
            options={allCategories}
            {...register("category", {
              required: "Select a category",
            })}
          />

          <SelectInput
            name="featured"
            label="Featured"
            options={["No", "Yes"]}
            defaultValue="no"
            {...register("featured", {
              required: "Required",
            })}
          />

          <SelectInput
            name="status"
            label="Staus"
            options={["Active", "Not Active"]}
            defaultValue="active"
            {...register("status", {
              required: "Required",
            })}
          />

          <Button className="m-5" onClick={log}>
            Log editor content
          </Button>
          <Button>
            {" "}
            {isLoading ? <LoaderCircle className="animate-spin" /> : "Upload"}
          </Button>
        </form>
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
}

export default PostForm;
