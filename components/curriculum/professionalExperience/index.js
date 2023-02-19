import ItemHeader from "../itemHeader";

function ProfessionalExperienceItem({
  startDate,
  endDate,
  current,
  content,
  role,
  company,
}) {
  return (
    <div>
      <ItemHeader
        {...{ startDate, endDate, current, role, institution: company }}
      />
      <ul style={{ margin: 0, padding: "3.5px 3.5px 0px 3.5px", listStylePosition: "inside" }}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProfessionalExperience({ data }) {
  // data.items.sort(compareDates);

  return (
    <div className="right-column">
      <h2
        className="color-text-violet"
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <b>Professional Experience</b>
      </h2>
      {data.items.map((item, index) => (
        <ProfessionalExperienceItem {...item} key={index} />
      ))}
    </div>
  );
}
