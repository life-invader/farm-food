import { createGlobalStyle } from 'styled-components';

// Глобальные стили

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  min-height: 100%;
}

body {
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #333333;
}
`;

export default GlobalStyle;
