function Name({ name }) {
  return (
    <div>
      <h1
        className="color-text-violet"
        style={{
          padding: 0,
          margin: 0,
          // color: "#7734b5",
        }}
      >
        <b>{name}</b>
      </h1>
    </div>
  );
}

function JobTitle({ title }) {
  return (
    <div>
      <h3
        className="color-text-violet"
        style={{
          padding: 0,
          margin: 0,
          // color: "#7734b5"
        }}
      >
        <b>{title}</b>
      </h3>
    </div>
  );
}

function ContactItem({ icon, content }) {
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
      <div
        style={{
          float: "left",
          width: "10%",
          padding: 0,
          margin: 0,
          paddingLeft: 4,
          textAlign: "start",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          float: "left",
          width: "90%",
          padding: 0,
          margin: 0,
          textAlign: "center",
        }}
      >
        <p
          style={{
            padding: 0,
            margin: 0,
            textAlign: "start",
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

function Contact({ contact }) {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      {contact.items.map(({ icon, content }, index) => (
        <ContactItem icon={icon} content={content} key={index} />
      ))}
    </div>
  );
}

export default function PersonalDetails({ data }) {
  return (
    <div
      className="left-column"
      style={{
        width: "100%",
      }}
    >
      <Name name={data.name} />
      <JobTitle title={data.jobTitle} />
      <Contact contact={data.contact} />
    </div>
  );
}
