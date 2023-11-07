import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-900: #0D0D0D;
    --dark-800: #141A26;
    --blue-900: #123159;
    --blue-800: #3D9DF2;
    --blue-700: #5CF2F2;
    --gradient-blue: linear-gradient(225deg, #5CF2F2 0%, #3D9DF2 100%);
    --white-900: #FFFFFF;
    --white-800: #F2F2F2;
  }
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
    padding: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    font-family: 'Roboto Mono', monospace, sans-serif;
    font-size: 100%;
    list-style-type: none;
    text-decoration: none;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  li {
    list-style: none;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`