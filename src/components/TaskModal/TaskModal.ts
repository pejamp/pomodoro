import styled from "styled-components";

export const ContainerModal = styled.dialog`
  width: 21.25rem;
  min-height: 14rem;
  border-radius: 6px;
  background: var(--dark-700);
  padding: 1rem 1.5rem;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;

  @media screen and (min-width: 501px) {
    width: 30rem;
    min-height: 20rem;
    padding: 1.5rem 2rem;
  }
`

export const Overlay = styled.div`
  background: var(--dark-900-opacity);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
`

export const LabelStyled = styled.label`
  color: var(--white-900);
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & + & {
    margin-top: 0.875rem;
  }

  @media screen and (min-width: 501px) {
    font-size: 1rem;

    & + & {
      margin-top: 1.5rem;
    }
  }
`

export const InputTask = styled.input`
  width: 100%;
  padding: 0.375rem 0.625rem;
  border-radius: 6px;
  background: var(--blue-900);
  border: none;
  font-size: 0.875rem;
  color: var(--white-800);

  &::placeholder {
    color: var(--white-800-opacity);
  }

  @media screen and (min-width: 501px) {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }
`

export const InputNumber = styled(InputTask)`
  -moz-appearance: textfield;
  appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  text-align: right;
  width: 4rem;
`

export const ButtonCount = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  line-height: 0;
  border: none;
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: var(--white-800);
    font-size: 1.25rem;
  }

  @media screen and (min-width: 501px) {
    width: 2rem;
    height: 2rem;

    svg {
      font-size: 1.5rem;
    }
  }
`

export const ControlModal = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

export const ControlButton = styled.button`
  padding: 0.375rem 0.875rem;
  text-align: center;
  background: transparent;
  border: none;
  color: var(--white-800);
  font-size: 0.875rem;
  cursor: pointer;

  @media screen and (min-width: 501px) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`

export const ControlButtonBg = styled(ControlButton)`
  background: var(--blue-700);
  border-radius: 6px;
`