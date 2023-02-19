import Summary from "./summary";
import Education from "./education";
import ProfessionalExperience from "./professionalExperience";
import { curriculumData } from "./data";

export default function RightColumn() {
  const data = curriculumData.rightColumn
  return (
    <div
      style={{
        // backgroundColor: "grey",
        float: "right",
        width: "66.7%",
        height: "100%",
        padding: "10px 10px 10px 16px",
        /*
          height: "300px",
          fontSize: "30px",
          textAlign: "center",
          */
      }}
    >
      <Summary data={data.summary} />
      <ProfessionalExperience data={data.professionalExperience} />
      <Education data={data.education} />
    </div>
  );
}
