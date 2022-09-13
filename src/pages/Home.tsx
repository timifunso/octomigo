import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: "24px", opacity: 0 },
    show: { y: "0px", opacity: 1 },
  };

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      navigate(`/${searchValue}`);
    }, 200);
  }

  return (
    <div className={styles.home}>
      <div className={styles.illustration}></div>
      <div className={styles.heading}>Octomigo</div>
      <motion.form
        variants={item}
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.form__container}
        >
          <motion.input
            variants={item}
            type="search"
            required
            placeholder="Github Username"
            className={styles.form__input}
            onChange={handleOnChange}
          />
          <motion.button
            variants={item}
            className={styles.form__button}
            type="submit"
          >
            Find Profile
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
}

export default HomePage;
