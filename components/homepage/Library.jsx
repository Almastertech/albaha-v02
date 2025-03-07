"use client";

import Marquee from "react-fast-marquee";

function Library() {
  return (
    <section className="p-8 bg-[#222] text-white flex flex-col items-center gap-6">
      <h2 className="text-4xl font-bold">مكتبة المرصد</h2>
      <AlmarsadNews />
    </section>
  );
}

const AlmarsadNews = () => {
  const dummyNews = [
    "Breaking: Market hits all-time high",
    "New tech regulations announced",
    "Sports: Local team wins championship",
    "Weather: Heavy rain expected tomorrow",
    "Entertainment: New movie breaks records",
    "Health: Experts recommend new diet plan",
    "Economy: Inflation rates drop significantly",
    "Politics: Elections scheduled for next month",
    "Science: New planet discovered in nearby system",
    "Travel: Top destinations for 2025 revealed",
  ];

  return (
    <div className="w-full overflow-hidden">
      <Marquee
        speed={80}
        // loop={0}
        pauseOnHover={true}
        gradient={false} // disable gradient for a clean look
        className="whitespace-nowrap">
        {dummyNews.map((news, index) => (
          <div
            key={index}
            className="inline-block px-6 text-lg font-medium text-white">
            {news}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Library;
