export default function Summary({ data }) {
  return (
    <div className="right-column">
      <div style={{ padding: 0, margin: 0 }}>
        <p style={{ margin: 0 }}>{data.content}</p>
      </div>
    </div>
  );
}
