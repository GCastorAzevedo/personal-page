import DateSpan from "../utils";

export default function ItemHeader({
  startDate,
  endDate,
  current,
  role,
  institution,
}) {
  return (
    <div
      style={{
        content: "",
        display: "table",
        clear: "both",
        width: "100%",
        height: "100%",
      }}
    >
      <h5
        style={{
          opacity: 0.85,
          float: "left",
          textAlign: "start",
          maxWidth: "85%",
          height: "100%",
          padding: 0,
        }}
      >
        <b>
          {role} / {institution}
        </b>
      </h5>
      <div
        style={{
          float: "right",
          textAlign: "start",
          maxWidth: "30%",
          height: "100%",
          padding: 0,
        }}
      >
        <DateSpan startDate={startDate} endDate={endDate} current={current} />
      </div>
    </div>
  );
}
