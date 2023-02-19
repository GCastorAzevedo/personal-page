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
      <ul style={{ margin: 0, padding: "3.5px 3.5px 0px 3.5px", listStylePosition: "inside" }}>
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
    <div className="right-column" style={{ paddingBottom: 20 }}>
      <div style={{ padding: 0, margin: 0 }}>
        <h2
          className="color-text-violet"
          style={{
            padding: "8px",
            margin: 0,
          }}
        >
          <b>Education</b>
        </h2>
        {data.items.map((item, index) => (
          <EducationItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
