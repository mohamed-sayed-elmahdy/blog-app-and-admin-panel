"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function BlogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("author", data.author);
      if (data.image[0]) {
        formData.append("image", data.image[0]); // أول صورة
      }

      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Something went wrong");

      setMessage("✅ Blog created successfully!");
      reset();
      setPreview(null);
    } catch (err) {
      setMessage("❌ Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Create Blog Post</h2>

      {message && <p className="mb-2">{message}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
          className="border p-2 rounded"
        />
        {errors.title && <span>{errors.title.message}</span>}

        <textarea
          placeholder="Content"
          {...register("content", { required: "Content is required" })}
          className="border p-2 rounded"
        />
        {errors.content && <span>{errors.content.message}</span>}

        <input
          type="text"
          placeholder="Author"
          {...register("author", { required: "Author is required" })}
          className="border p-2 rounded"
        />
        {errors.author && <span>{errors.author.message}</span>}

        <input
          type="file"
          accept="image/*"
          {...register("image")}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setPreview(URL.createObjectURL(e.target.files[0]));
            }
          }}
        />
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover rounded"
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Create"}
        </button>
      </form>
    </div>
  );
}
