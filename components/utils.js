// TODO: decide whether to define colors in a directory and apply them within style prop,
// or define css stylesheets in the page and call them for each component.
// TODO: investigate the best practices about css, and how to define stylesheets at the page level.
export default function DateSpan({ startDate, endDate, current }) {
  if (current) {
    endDate = (
      <span
        className="color-violet"
        style={{
          borderRadius: "4px",
          display: "inline-block",
          paddingLeft: "6px",
          paddingRight: "6px",
          textAlign: "center",
        }}
      >
        Current
      </span>
    );
  }
  return (
    <h6 className="color-text-violet">
      {startDate}
      {endDate ? " - " : ""}
      {endDate}
    </h6>
  );
}

export const compareDates = (a, b) => (a.startDate < b.startDate ? 1 : -1);
