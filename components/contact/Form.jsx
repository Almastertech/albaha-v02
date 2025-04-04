import Image from "next/image";

export const Form = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-10 md:flex-row bg-[#232629] text-white p-5">
      {/* Form */}
      <div className="md:w-1/2 flex flex-col justify-center pe-4 py-4">
        <h1 className="text-3xl font-bold mb-8 text-start">طلب بيانات</h1>
        <p className="text-sm mb-2 text-start">بيانات مقدم الطلب</p>

        <form className="flex flex-col gap-6 justify-between">
          {/* Name Field */}
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="mb-1 text-sm">
              أسمك
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded border border-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col items-start">
            <label htmlFor="nationality" className="mb-1 text-sm">
              رقم جوالك
            </label>
            <input
              type="phone"
              id="nationality"
              className="w-full p-2 rounded border border-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="mb-1 text-sm">
              بريدك الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded border border-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
          </div>

          {/* Job Field */}
          <div className="flex flex-col items-start">
            <label htmlFor="dob" className="mb-1 text-sm">
              الوظيفة
            </label>
            <input
              type="text"
              id="dob"
              className="w-full p-2 rounded border border-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"
            />
          </div>

          {/* Description Field */}
          <div className="flex flex-col items-start">
            <label htmlFor="message" className="mb-1 text-sm">
              وصف البانات المطلوبة
            </label>
            <textarea
              rows={4}
              id="message"
              className="w-full resize-none p-2 rounded border border-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fff]/75 text-right"></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-[#11504D80] text-white font-semibold py-2 rounded transition duration-300">
              إرسال الطلب
            </button>
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
