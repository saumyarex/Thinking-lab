import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ label, name, control, defaultValue = "" }) {
  return (
    <div>
      {label && <label className="m-1 mb-4 p-2 font-medium ">{label} </label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: "Required" }}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={String(import.meta.env.VITE_TinyMCE_API_KEY)}
            onEditorChange={onChange}
            initialValue={defaultValue || "<p>Write your blog here.</p>"}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        )}
      />
    </div>
  );
}

export default RTE;
