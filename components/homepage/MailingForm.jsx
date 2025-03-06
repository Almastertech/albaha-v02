"use client";
import { usePathname } from "next/navigation";
import BtnIcon from "../../public/assets/home/mailing_list/Button-Main-5.svg";

function MailingForm({ data }) {
  const path = usePathname();
  return (
    <form className="flexify w-full mt-10">
      <div className="bg-white flex items-center justify-between w-[40%]">
        <input
          type="email"
          required
          placeholder={data.placeholder}
          className="bg-white text-black w-full focus:outline-none px-4 py-1"
        />
        <button
          className={`cursor-pointer  p-1.5  ${
            path.includes("/en") && "rotate-180"
          }`}>
          <BtnIcon />
        </button>
      </div>
    </form>
  );
}

export default MailingForm;
