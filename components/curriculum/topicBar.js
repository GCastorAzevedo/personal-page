export default function TopicBar({ topic, percentage, display = false }) {
  return (
    <div style={{ margin: 4 }}>
      <p style={{ margin: 2 }}>{topic}</p>
      <div
        className="color-dark-grey"
        style={{
          margin: 2,
          borderRadius: "2px",
          fontSize: "12px!important",
        }}
      >
        <div
          className="color-violet"
          style={{
            height: 18,
            width: `${percentage}%`,
            borderRadius: "2px",
            textAlign: "center!important",
          }}
        >
          {display ? (
            <div
              className="color-text-white"
              style={{ height: 18, textAlign: "center" }}
            >{`${percentage}%`}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
