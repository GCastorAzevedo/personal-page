import TopicBar from "../topicBar";

export default function Interests({ data }) {
  return (
    <div className="left-column">
      <div>
        <h4 className="color-text-violet">
          <b>Interests</b>
        </h4>
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
