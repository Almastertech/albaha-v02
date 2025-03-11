function LineTitle({ className, children = "Add text" }) {
  return (
    <div className={`relative w-fit  ${className}`}>
      <h2 className="text-3xl font-[800] px-6 z-[10] ">{children} </h2>
      <div className="w-[100px]  transform -translate-y-1/2 -left-[100px] top-1/2 absolute bg-[#DED3B3] py-[0.75px]  "></div>
      <div className="w-[100px] transform -translate-y-1/2 -right-[100px] top-1/2 absolute bg-[#DED3B3] py-[0.75px]  "></div>
    </div>
  );
}

export default LineTitle;
