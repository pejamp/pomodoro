import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-900: #0D0D0D;
    --dark-700: #141A26;

    --white-900: #FFFFFF;
    --white-800: #F2F2F2;

    --blue-900: #123159;
    --blue-800: #6788B2;
    --blue-700: #3D9DF2;
    --blue-500: #5CF2F2;

    --gradient-blue: linear-gradient(225deg, #5CF2F2 0%, #3D9DF2 100%);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Mono', monospace, sans-serif;
    font-size: 100%;
    list-style-type: none;
    text-decoration: none;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }

  li {
    list-style: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`