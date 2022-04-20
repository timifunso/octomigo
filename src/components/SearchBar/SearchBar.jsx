import SearchBarStyled from "./SearchBar.styled";

function SearchBar() {
  return (
    <SearchBarStyled>
      <input type="search" placeholder="Enter github username" />
      <button type="submit">Search</button>
    </SearchBarStyled>
  );
}

export default SearchBar;
