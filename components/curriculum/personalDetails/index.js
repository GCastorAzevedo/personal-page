function Name() {
  return <></>;
}

function JobTitle() {
  return <></>;
}

function Contact() {
  return <></>;
}

export default function PersonalDetails({ data }) {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#fff",
      }}
    >
      <Name />
      <JobTitle />
      <Contact />
    </div>
  );
}
