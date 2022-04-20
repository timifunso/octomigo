import SearchBarStyled from "./SearchBar.styled";

function SearchBar() {
  return (
    <SearchBarStyled>
      <input type="search" />
      <button type="submit">Search</button>
    </SearchBarStyled>
  );
}

export default SearchBar;
