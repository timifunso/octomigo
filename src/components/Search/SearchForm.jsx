import SearchFormStyled from "./SearchForm.styled";
import { useContext, useRef } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const username = useRef();
  const navigate = useNavigate();
  const { setUsername } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    let text = username.current.value;
    if (text !== "") {
      setUsername(text);
      username.current.value = "";
      navigate("/profile");
    }
  }

  return (
    <SearchFormStyled>
      <h1>Octomigo</h1>
      <p>Search GitHub users' profiles</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={username}
          type="search"
          placeholder="Enter github username"
        />
        <button type="submit">Search</button>
      </form>
    </SearchFormStyled>
  );
}

export default SearchForm;
