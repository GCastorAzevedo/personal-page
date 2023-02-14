import TopicBar from "../topicBar";

export default function Languages({ data }) {
  return (
    <div style={{ padding: "4px", margin: "16px 10px 16px 10px" }}>
      <div>
        <p>
          <b>Languages</b>
        </p>
      </div>
      <div>
        {data.items.map((item, index) => (
          <TopicBar
            topic={item.language}
            percentage={item.percentage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
