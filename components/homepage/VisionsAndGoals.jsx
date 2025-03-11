import { VisionsAndGoalsBlock } from "./VisionsAndGoalsBlock";

function VisionsAndGoals({ data }) {
  return (
    <section className="snap-start  p-res px-40 flexify h-screen bg-gradient-to-r text-white from-[#0B0E0D] to-[#022924]">
      <div className="flexify-col gap-10">
        <h2 className="text-4xl font-bold">{data.title}</h2>
        <div className="flexify">
          {data.visionsandgolas.map((item) => (
            <VisionsAndGoalsBlock data={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionsAndGoals;
