import styles from "./grid.module.css";

export function GridHorizontal({ children }) {
  return (
    <div
      style={{
        padding: "10px",
      }}
      className={styles.curriculumGridRow}
    >
      {children}
    </div>
  );
}

export function GridVertical({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
}
