import TopicBar from "../topicBar";

export default function Interests({ data }) {
  return (
    <div style={{ padding: "4px", margin: "16px 10px 16px 10px" }}>
      <div>
        <p>
          <b>Interests</b>
        </p>
      </div>
      <div>
        {data.items.map((item, index) => (
          <TopicBar
            topic={item.interest}
            percentage={item.percentage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
