import styled from "styled-components";

export const Container = styled.div`
  height: 58px;
  padding: 0 16px;
  background: var(--dark-700);
  border-radius: 8px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border-color 200ms ease-in;

  &:hover {
    border-color: var(--blue-800);
  }

  &:active {
    border-color: var(--blue-700);
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const TextStyles = styled.p`
  flex: 1;
  color: var(--white-900);
  font-size: 1.25rem;
`

export const CheckboxControl = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;

  &:has(input:checked) {
    ${TextStyles} {
      color: var(--white-800-opacity);
      text-decoration: line-through;
    }
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    margin: 0;
    
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid var(--white-800-opacity);
    border-radius: 50%;
    
    cursor: pointer;
    display: grid;
    place-content: center;

    transition: border 200ms ease-in;

    &:hover {
      background: linear-gradient(var(--dark-700), var(--dark-700)) padding-box,
      var(--gradient-blue) border-box;
      border-radius: 50%;
      border-color: transparent;
    }

    &::before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-image: url('/src/assets/check-input.svg'), var(--gradient-blue);
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;
      visibility: hidden;
      opacity: 0;
      
      transition: opacity 200ms ease-in;
    }

    &:checked::before {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const ButtonStyles = styled.button`
  background: transparent;
  border: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--white-800-opacity);
  
  transition: color 200ms ease-in;

  &:hover {
    color: var(--red-600);
  }
`

