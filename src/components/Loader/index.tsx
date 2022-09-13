import styles from "./Loader.module.css";
import { Refresh } from "iconsax-react";

function Loader() {
  return (
    <div className={styles.container}>
      <Refresh size={24} className={styles.loader__icon} />
      <div className={styles.heading}>Wait a sec!</div>
    </div>
  );
}

export default Loader;
