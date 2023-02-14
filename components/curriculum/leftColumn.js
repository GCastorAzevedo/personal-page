import React from "react";
import Languages from "./languages";
import Interests from "./interests";
import PersonalDetails from "./personalDetails";
import Programming from "./programming";
import Skills from "./skills";

export default function LeftColumn() {
  const scale = [1, 0.8, 0.6, 0.4, 0.2];
  const generateRange = (r, g, b, s) => `rgb(${r}, ${g}, ${b}, ${s})`;
  const colorRanges = {
    paleViolet: scale.map((s) => generateRange(134, 45, 134, s)),
    violet: scale.map((s) => generateRange(103, 58, 183, s)),
    redViolet: scale.map((s) => generateRange(156, 39, 176, s)),
    mixedViolet: scale.map((s) => generateRange(132, 48, 179, s)),
  };
  const data = {
    personalDetails: {},
    programming: {
      items: [
        {
          letter: "Python",
          value: 35,
        },
        {
          letter: "Node/JS",
          value: 30,
        },
        {
          letter: "React",
          value: 15,
        },
        {
          letter: "Go",
          value: 10,
        },
        {
          letter: "C",
          value: 7,
        },
      ],
      colorRange: colorRanges["mixedViolet"],
    },
    languages: {
      items: [
        {
          language: "Portuguese (Native)",
          percentage: 100,
        },
        {
          language: "English (Fluent)",
          percentage: 85,
        },
        {
          language: "French (Advanced)",
          percentage: 70,
        },
        {
          language: "Italian (Intermediary)",
          percentage: 50,
        },
      ],
    },
    interests: {
      items: [
        {
          interest: "System Design & Architecture",
          percentage: 100,
        },
        {
          interest: "Data Engineering",
          percentage: 85,
        },
        {
          interest: "Machine Learning",
          percentage: 70,
        },
        {
          interest: "Statistical Modelling",
          percentage: 50,
        },
        {
          interest: "Quantum Gravity",
          percentage: 35,
        },
      ],
    },
    skills: {
      items: [
        { skill: "Adobe Photoshop", percentage: 90 },
        { skill: "Photography", percentage: 80 },
      ],
    },
  };
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
