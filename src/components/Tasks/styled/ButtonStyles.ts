import styled from "styled-components";

export const ButtonStyles = styled.button`
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  border: 2px dashed rgba(242, 242, 242, 0.60);
  background: var(--blue-900);
  color: rgba(242, 242, 242, 0.60);
  cursor: pointer;
  font-size: 1rem;
  transition: all 200ms ease-in;

  &:hover {
    color: var(--white-800);
    border-color: var(--white-800);
  }
`;
