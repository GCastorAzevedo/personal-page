import TopicBar from "../topicBar";
import Example from "./bubbleChart";

export default function Skills({ data }) {
  return (
    <div style={{ padding: "4px", margin: "16px 10px 16px 10px" }}>
      <div>
        <p>
          <b>Skills</b>
        </p>
      </div>
      <div>
        <Example />
      </div>
      <div>
        {data.items.map((item, index) => (
          <TopicBar
            topic={item.skill}
            percentage={item.percentage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
