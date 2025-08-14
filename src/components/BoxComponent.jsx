import styles from "../styles/BoxComponent.module.css";

export default function BoxComponent() {
  console.log(styles);

  const inlineCSS = {
    color: "green",
    border: "solid white",
    backgroundColor: "yellow",
  };

  return (
    <div className={styles.anotherContainer}>
      <h1>Module</h1>
      <h1 style={inlineCSS}>Inline</h1>
    </div>
  );
}
