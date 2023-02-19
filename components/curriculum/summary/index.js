export default function Summary({ data }) {
  return (
    <div className="right-column">
      <h1
        className="color-text-violet"
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <b>Summary</b>
      </h1>
      <div style={{ padding: 0, margin: 0 }}>
        <p style={{ margin: 0 }}>{data.content}</p>
      </div>
    </div>
  );
}
