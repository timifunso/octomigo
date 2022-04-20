import styled from "styled-components";

const SearchFormStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  > * {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }

  & p {
    margin-bottom: 1rem;
  }

  & form {
    width: 100%;
    margin: 1rem auto;

    & input {
      width: 100%;
      background-color: var(--color-120);
      height: 48px;
      border-radius: 4px;
      padding: 0 1rem;
    }

    & button {
      height: 48px;
      padding: 0 3rem;
      /* width: 100%; */
      margin-top: 1rem;
      background-color: var(--color-300);
      color: var(--color-120);
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export default SearchFormStyled;
