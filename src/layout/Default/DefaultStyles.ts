import styled from "styled-components";

export const Container = styled.div`
  background: var(--dark-900);
  height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media screen and (min-width: 501px) {
    padding: 4.5rem 2rem;
  }
  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: center;
    gap: 96px;
  }
`;