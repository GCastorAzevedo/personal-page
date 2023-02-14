import ItemHeader from "../itemHeader";

function EducationItem({
  startDate,
  endDate,
  current,
  content,
  institution,
  degree,
}) {
  return (
    <div>
      <ItemHeader
        {...{ startDate, endDate, current, role: degree, institution }}
      />
      <ul style={{ margin: "3.5px" }}>
        {content.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Education({ data }) {
  // data.items.sort(compareDates);

  return (
    <div className="right-column">
      <div style={{ padding: 0, margin: 0 }}>
        <h2
          style={{
            padding: "8px",
            margin: 0,
          }}
        >
          Education
        </h2>
        {data.items.map((item, index) => (
          <EducationItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
