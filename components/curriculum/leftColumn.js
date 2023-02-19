import React from "react";
import Languages from "./languages";
import Interests from "./interests";
import PersonalDetails from "./personalDetails";
import Programming from "./programming";
import Skills from "./skills";
import { curriculumData } from "./data";

export default function LeftColumn() {
  const data = curriculumData.leftColumn
  return (
    <div
      style={{
        // backgroundColor: "#aaa",
        float: "left",
        width: "33.3%",
        height: "100%",
        padding: "10px",
        /*
          height: "300px",
          fontSize: "30px",
          textAlign: "center",
          */
      }}
    >
      <PersonalDetails data={data.personalDetails} />
      <Skills data={data.skills} />
      <Programming data={data.programming} />
      <Interests data={data.interests} />
      <Languages data={data.languages} />
    </div>
  );
}
