import styled from "styled-components";

export const ButtonStyles = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 4px;
  font-size: 1.5rem;
  color: var(--white-900);
  cursor: pointer;
  transition: transform 200ms ease-in;

  &:hover {
    transform: translateY(-2px);
  }
`; 