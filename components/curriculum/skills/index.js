import SkillsChart from "./bubbleChart";

export default function Skills({ data }) {
  return (
    <div className="left-column">
      <div>
        <h4 className="color-text-violet">
          <b>Skills</b>
        </h4>
      </div>
      <SkillsChart data={data} />
    </div>
  );
}
