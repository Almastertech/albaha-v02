export const Mapping = ({ setCurrentArea, showContent }) => {
  return (
    <div className="w-[550px] h-full absolute left-1/2  transform -translate-x-1/2 -top-6 ">
      {showContent && (
        <div className="relative">
          <div
            onMouseEnter={() => setCurrentArea("hogra")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  hogra left-7 top-60 w-[100px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("mandak")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  mandak left-40 top-[210px] w-[50px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("kora")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  kora left-40 top-[100px] w-[100px] h-[150px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("akik")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  akik left-60 top-[130px] w-[150px] h-[150px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("banyhasan")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  banyhasan left-50 top-[250px] w-[50px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("kalwa")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  kalwa left-20 top-80 w-[100px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("makhwa")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  makhwa left-44 top-100 w-[100px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("ghamed")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  ghamed left-60 top-120 w-[100px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("balghrshy")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  balghrshy left-80 top-90 w-[100px] h-[100px]  cursor-pointer"></div>
          <div
            onMouseEnter={() => setCurrentArea("baha")}
            onMouseLeave={() => setCurrentArea("")}
            className="absolute  baha left-64 top-80 w-[50px] h-[100px]  cursor-pointer"></div>
        </div>
      )}
    </div>
  );
};
