import styled from "styled-components";

const ProfileContainerStyled = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background-color: var(--color-500);
  color: var(--color-700);
  display: grid;
  gap: 1rem;

  & img {
    width: min(50vw, 200px);
    object-fit: contain;
    display: block;
  }

  @media (min-width: 500px) {
    grid-template-columns: 200px 1fr;
    align-items: center;
    gap: min(3rem, 10vw);
  }
`;

export default ProfileContainerStyled;
