import styled from "styled-components";

const SearchBarStyled = styled.form`
  width: 100%;
  max-width: 480px;
  padding: 1rem 0;

  & input {
    height: 48px;
    width: 100%;
    background-color: #ebebeb;
    border-radius: 4px;
    padding: 0 1rem;
  }

  & button {
    height: 48px;
    width: fit-content;
    margin-top: 1rem;
    padding: 0 2rem;
    border-radius: 4px;
  }
`;

export default SearchBarStyled;
