import styled from "styled-components";

const RepoItemStyled = styled.div`
  min-height: 200px;
  border-radius: 4px;
  background-color: var(--color-120);
  color: var(--color-500);

  & a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  & .container {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;

    .top {
      margin-bottom: 2rem;
    }

    .bottom {
      display: flex;
      align-items: center;
      margin-top: auto;
      justify-self: end;
      font-size: 0.9rem;

      & div {
        margin-right: 1rem;
      }

      & > div:nth-child(4) {
        margin-left: auto;
        justify-self: flex-end;
      }
    }
  }
`;

export default RepoItemStyled;
