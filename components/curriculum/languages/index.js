import TopicBar from "../topicBar";

export default function Languages({ data }) {
  return (
    <div className="left-column">
      <div>
        <h4 className="color-text-violet">
          <b>Languages</b>
        </h4>
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
