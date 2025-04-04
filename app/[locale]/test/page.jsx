"use client";

import Image from "next/image";

function page() {
  const path = process.env.NEXT_PUBLIC_FILES_PATH;
  return (
    <div>
      <Image
        src={`${path}2025/4/1/638791486301409294.png`}
        alt="ksdl;f"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default page;
