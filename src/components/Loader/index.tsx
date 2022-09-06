import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.heading}>Wait a sec!</div>
    </div>
  );
}

export default Loader;
