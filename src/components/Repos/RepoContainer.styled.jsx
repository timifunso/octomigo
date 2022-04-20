import styled from "styled-components";

const RepoContainerStyled = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0rem 0 8rem;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default RepoContainerStyled;
