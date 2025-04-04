"use client";
import { usePathname } from "next/navigation";
import BtnIcon from "../../public/assets/home/mailing_list/Button-Main-5.svg";
import { useEffect, useState } from "react";

function MailingForm() {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://34.166.121.10:3000/api/home/email", {
        method: "POST",
        headers: {
          apiKey: key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("There was an error submitting your email.");
      }

      const data = await response.json();
      setRes(data);
    } catch (err) {
      console.error(err);
      setError("There was a problem in the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flexify-col gap-4 w-full mt-10" onSubmit={handleSubmit}>
      <div className="bg-white flex items-center justify-between w-[40%]">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          required
          placeholder="إدخل بريــــدك الإلــــــكتـــرونـي للإشـــتــــراك"
          className="bg-white text-black w-full focus:outline-none px-4 py-1"
        />
        <div className=" cursor-pointer flexify text-black p-1.5">
          {!loading ? (
            <button
              onClick={() => handleSubmit}
              className={` cursor-pointer ${
                path.includes("/en") && "rotate-180"
              }`}>
              <BtnIcon />
            </button>
          ) : (
            <span className="p-2.5 text-xl flexify">loading...</span>
          )}
        </div>
      </div>
      {res && (
        <div className="bg-orange-400  text-black font-normal px-6   py-0 rounded-lg ">
          {res.id && "success"}
          {res.message && res.message}
        </div>
      )}
      {error && (
        <div className="bg-red-400  text-black font-normal px-6   py-0 rounded-lg ">
          {error}
        </div>
      )}
    </form>
  );
}

export default MailingForm;
