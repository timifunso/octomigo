import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

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
      <h1 className={styles.heading}>Octomigo</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__container}>
          <input
            type="search"
            required
            className={styles.form__input}
            onChange={handleOnChange}
          />
        </div>
      </form>
    </div>
  );
}

export default HomePage;
