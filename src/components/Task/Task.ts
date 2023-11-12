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
  transition: border-color 200ms ease-in;

  &:hover {
    border-color: var(--blue-800);
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const CheckboxControl = styled.label`
  display: flex;

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    margin: 0;
    cursor: pointer;

    font: inherit;
    color: currentColor;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid rgba(242, 242, 242, 0.60);
    border-radius: 50%;
    overflow: hidden;

    display: grid;
    place-content: center;

    transition: all 200ms ease-in;

    &::before {
      content: "";
      width: 1rem;
      height: 1rem;
      transform: translate(-0.1rem, -0.15rem);
      box-shadow: inset 1rem 1rem rgba(242, 242, 242, 0.60);
      clip-path: polygon(98.572% 37.739%,98.572% 37.739%,98.834% 38.063%,99.071% 38.406%,99.283% 38.769%,99.469% 39.148%,99.629% 39.542%,99.761% 39.948%,99.864% 40.366%,99.939% 40.793%,99.985% 41.227%,100% 41.667%,100% 41.667%,99.985% 42.107%,99.939% 42.541%,99.864% 42.968%,99.761% 43.386%,99.629% 43.793%,99.469% 44.187%,99.283% 44.566%,99.071% 44.928%,98.834% 45.272%,98.572% 45.595%,52.23% 98.373%,52.23% 98.373%,51.946% 98.672%,51.644% 98.943%,51.326% 99.184%,50.993% 99.396%,50.647% 99.577%,50.29% 99.728%,49.923% 99.846%,49.549% 99.931%,49.167% 99.983%,48.781% 100%,48.781% 100%,48.395% 99.983%,48.013% 99.931%,47.638% 99.846%,47.272% 99.728%,46.915% 99.577%,46.569% 99.396%,46.236% 99.184%,45.918% 98.943%,45.616% 98.672%,45.332% 98.373%,23.381% 73.373%,23.381% 73.373%,23.126% 73.048%,22.896% 72.704%,22.691% 72.342%,22.512% 71.965%,22.359% 71.573%,22.233% 71.169%,22.135% 70.754%,22.064% 70.331%,22.023% 69.901%,22.012% 69.466%,22.012% 69.466%,22.03% 69.031%,22.078% 68.602%,22.154% 68.18%,22.259% 67.767%,22.391% 67.365%,22.55% 66.977%,22.735% 66.602%,22.945% 66.244%,23.181% 65.905%,23.44% 65.585%,23.44% 65.585%,23.721% 65.29%,24.019% 65.022%,24.333% 64.782%,24.662% 64.571%,25.003% 64.39%,25.356% 64.24%,25.718% 64.121%,26.088% 64.033%,26.465% 63.979%,26.847% 63.958%,26.847% 63.958%,27.229% 63.971%,27.607% 64.018%,27.978% 64.098%,28.342% 64.21%,28.697% 64.354%,29.041% 64.528%,29.373% 64.732%,29.691% 64.966%,29.993% 65.228%,30.278% 65.518%,48.781% 86.59%,91.674% 37.739%,91.674% 37.739%,91.958% 37.441%,92.26% 37.17%,92.578% 36.929%,92.91% 36.717%,93.256% 36.535%,93.613% 36.385%,93.98% 36.267%,94.355% 36.182%,94.736% 36.13%,95.123% 36.113%,95.123% 36.113%,95.509% 36.13%,95.89% 36.182%,96.265% 36.267%,96.632% 36.385%,96.989% 36.535%,97.335% 36.717%,97.668% 36.929%,97.986% 37.17%,98.288% 37.441%,98.572% 37.739%);
    }

    &:checked {
      background: var(--gradient-blue);
      border: none;
    }
    &:checked::before {
      box-shadow: inset 1rem 1rem var(--white-800);
    }
  }
`

export const ButtonStyles = styled.button`
  background: transparent;
  border: 0;
  width: 24px;
  cursor: pointer;

  transition: all 200ms ease-in;

  &:hover {
    svg {
      
    }
  }
`

export const TextStyles = styled.p`
  flex: 1;
  color: var(--white-900);
  font-size: 1.25rem;
`