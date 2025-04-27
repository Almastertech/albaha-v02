"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("");
    try {
      const res = await fetch("http://34.166.121.10:3000/api/datarequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setStatus("✅ تم الإرسال بنجاح");
      reset();

      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (err) {
      setStatus("❌ فشل في إرسال الطلب");
      console.error(err);
    }
  };

  return (
    <div className="w-[80%] h-fit mx-auto flex flex-col gap-10 md:flex-row bg-[#232629] text-white p-5 rounded-xl mb-20">
      {/* Form */}
      <div className="md:w-1/2 flex flex-col justify-center pe-4 py-4">
        <h1 className="text-3xl font-bold mb-8 text-start">طلب بيانات</h1>
        <p className="text-sm mb-2 text-start">بيانات مقدم الطلب</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 justify-between">
          {/* Name Field */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="name" className="mb-1 text-sm">
              أسمك
            </label>
            <input
              type="text"
              id="name"
              {...register("Name", { required: "الاسم مطلوب" })}
              className="w-full rounded border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
            {errors.Name && (
              <span className="text-red-500 mt-3 text-sm">
                {errors.Name.message}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="phone" className="mb-1 text-sm">
              رقم جوالك
            </label>
            <input
              type="tel"
              id="phone"
              {...register("Phone", {
                required: "رقم الجوال مطلوب",
                pattern: {
                  value: /^[0-9]{9,15}$/,
                  message: "رقم غير صالح",
                },
              })}
              className="w-full rounded border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
            {errors.Phone && (
              <span className="text-red-500 mt-3 text-sm">
                {errors.Phone.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="mb-1 text-sm">
              بريدك الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              {...register("Email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "بريد إلكتروني غير صالح",
                },
              })}
              className="w-full rounded border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
            {errors.Email && (
              <span className="text-red-500 mt-3 text-sm">
                {errors.Email.message}
              </span>
            )}
          </div>

          {/* Job Field */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="job" className="mb-1 text-sm">
              الوظيفة
            </label>
            <input
              type="text"
              id="job"
              {...register("Job", { required: "الوظيفة مطلوبة" })}
              className="w-full rounded border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
            {errors.Job && (
              <span className="text-red-500 mt-3 text-sm">
                {errors.Job.message}
              </span>
            )}
          </div>

          {/* Description Field */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="description" className="mb-1 text-sm">
              وصف البيانات المطلوبة
            </label>
            <textarea
              id="description"
              rows={2}
              {...register("Description", { required: "الوصف مطلوب" })}
              className="w-full resize-none rounded border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
            {errors.Description && (
              <span className="text-red-500 mt-3 text-sm">
                {errors.Description.message}
              </span>
            )}
          </div>

          {/* Submit Button + Status */}
          <div className="w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#11504D80] cursor-pointer text-white font-semibold py-2 rounded transition duration-300">
              {isSubmitting ? "..." : "إرسال الطلب"}
            </button>
            {status && (
              <p className="mt-2 text-sm text-center text-green-400">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Image */}
      <div className="md:w-1/2 relative">
        <Image
          src="/assets/home/library/photo-1.png"
          alt="Mountain Village"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
