import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button, SelectInput, TagsCard, RTE, TagsInput } from "./";
import toast, { Toaster } from "react-hot-toast";
import authServices from "../appwrite/authServices";
import { login } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import blogPostServices from "../appwrite/blogPostServices";
import { LoaderCircle } from "lucide-react";

function PostForm({ post }) {
  const navigate = useNavigate();

  const allCategories = [
    "",
    "Design and Branding",
    "Website Development",
    "App Development",
    "Social Media",
    "Marketing Strategy",
    "Video Production",
  ];

  const tagsOption = [
    "design",
    "branding",
    "seo",
    "web developemt",
    "marketing",
    "ux design",
    "app development",
    "social media",
    "ui design",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      excerpt: post?.excerpt || "",
      status: post?.status || "Active",
      tags: post?.tags || [],
      category: post?.category || "",
      isFeatured: post?.isFeatured || "No",
    },
  });

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!userInfo) {
      const fetchUser = async () => {
        try {
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
                })
              );
            }
          }
        } catch (error) {
          console.error("Fetching user details error", error);
          toast.error(error.message || "Failed to fetch user");
        }
      };
      fetchUser();
    }
  }, [userInfo, dispatch]);

  const slugTransformation = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransformation(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [setValue, watch, slugTransformation]);

  // if post exist get image from it's id
  const [imageId, setImageId] = useState();
  useEffect(() => {
    async function getImage(fileId) {
      try {
        const response = await blogPostServices.getImage(fileId);
        setImageId(response.replace("preview", "view"));
      } catch (error) {
        console.log("Error fetching image: ", error);
        toast.error(error.message);
      }
    }

    if (!imageId) {
      if (post) {
        getImage(post.coverImage);
      }
    }
  }, [imageId, post]);

  const [uploading, setUploading] = useState(false);

  async function onSubmit(data) {
    setUploading(true);

    if (post) {
      try {
        let newImageId;
        let newUploadedImage;
        let response;
        //if user has given new image upload it
        if (data.coverImage[0]) {
          newUploadedImage = await blogPostServices.uploadImage(
            data.coverImage[0]
          );
          newImageId = newUploadedImage.$id;
        }

        //updating the blog data and if something goes wrong remove the new uploaded image
        try {
          response = await blogPostServices.postUpdate(post.$id, {
            ...data,
            coverImage: data.coverImage[0] ? newImageId : post.coverImage,
          });
        } catch (error) {
          console.log("Uploading error", error);
          await blogPostServices.deleteImage(newImageId);
          toast.error(error.message);
        }

        if (newUploadedImage && response) {
          await blogPostServices.deleteImage(post.coverImage);
        }

        toast.success("Blog updated successfully");
        navigate(`/post/${response.slug}/${response.$id}`);
      } catch (error) {
        console.log("Uploading error", error);

        toast.error(error.message);
      } finally {
        setUploading(false);
      }
    } else {
      try {
        const uploadImage = await blogPostServices.uploadImage(
          data.coverImage[0]
        );

        const coverImageID = uploadImage.$id;

        try {
          const response = await blogPostServices.postCreation({
            title: data.title,
            slug: data.slug,
            content: data.content,
            excerpt: data.excerpt,
            coverImage: coverImageID,
            status: data.status,
            userId: userInfo.userId,
            userDetailsID: userInfo.userDetailsId,
            tags: data.tags,
            category: data.category,
            isFeatured: data.isFeatured,
          });
          toast.success("Blog uploaded successfully");
          navigate(`/post/${response.slug}/${response.$id}`);
        } catch (error) {
          await blogPostServices.deleteImage(uploadImage.$id);
          console.log("Uploading error", error);
          toast.error(error.message);
        }
      } catch (error) {
        console.log("Uploading error", error);
        toast.error(error.message);
      } finally {
        setUploading(false);
      }
    }
  }

  return (
    <div className="mx-2 mt-5 sm:p-10 p-1">
      {/* Main heading */}
      <h1 className="text-2xl sm:text-3xl font-bold  text-center">
        {post ? "Edit Your Post" : "Upload Your Post"}
      </h1>

      <div className="bg-gray-300 h-0.5 mt-3 w-full"></div>

      {/* post uploading form */}
      <div className="my-5 ">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 w-full "
        >
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
            onInput={(e) => {
              setValue("slug", slugTransformation(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}

          <RTE
            label={"Content"}
            name={"content"}
            control={control}
            defaultValue={getValues("content")}
          />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}

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
              required: !post ? "Cover image is required" : false,
              validate: {
                lessThan2MB: (files) =>
                  !files?.[0] ||
                  files?.[0]?.size < 2 * 1024 * 1024 ||
                  "Cover image must be less than 2MB",
                acceptOnlyJpegOrPng: (files) =>
                  !files?.[0] ||
                  ["image/jpeg", "image/png", "image/webp"].includes(
                    files?.[0]?.type
                  ) ||
                  "Only JPG/PNG files are allowed",
              },
            })}
          />

          {errors.coverImage && (
            <p className="text-red-500">{errors.coverImage.message}</p>
          )}

          {post && (
            <div>
              <img src={imageId} alt={post.title} />
            </div>
          )}

          <TagsInput
            label={"Tags"}
            name="tags"
            control={control}
            tags={tagsOption}
          />
          {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}

          <SelectInput
            name="category"
            label="Select category"
            options={allCategories}
            {...register("category", {
              required: "Select a category",
              minLength: {
                value: 1,
                message: "Select a category",
              },
            })}
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}

          <SelectInput
            name="isFeatured"
            label="Featured"
            options={["No", "Yes"]}
            {...register("isFeatured", {
              required: "Required",
            })}
          />
          {errors.isFeatured && (
            <p className="text-red-500">{errors.isFeatured.message}</p>
          )}

          <SelectInput
            name="status"
            label="Status"
            options={["Active", "Not Active"]}
            {...register("status", {
              required: "Required",
            })}
          />
          {errors.status && (
            <p className="text-red-500">{errors.status.message}</p>
          )}

          <div className="bg-gray-300 h-0.5 mt-3 w-full"></div>

          <div className="flex justify-center">
            <Button className="flex">
              {" "}
              {uploading ? (
                <>
                  Uploading ...
                  <LoaderCircle className="animate-spin" />
                </>
              ) : (
                "Upload"
              )}
            </Button>
          </div>
        </form>
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
}

export default PostForm;
