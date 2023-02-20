import Summary from "./summary";
import Education from "./education";
import ProfessionalExperience from "./professionalExperience";
import { curriculumData } from "./data";

export default function RightColumn() {
  const data = curriculumData.rightColumn;
  return (
    <div
      style={{
        float: "right",
        width: "66.7%",
        height: "100%",
        padding: "10px 10px 10px 16px",
      }}
    >
      <Summary data={data.summary} />
      <ProfessionalExperience data={data.professionalExperience} />
      <Education data={data.education} />
    </div>
  );
}
