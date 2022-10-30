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
  font-family: ${({ theme }) => theme.fontFamily};
  min-height: 100%;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontMainColor};
}
`;

export default GlobalStyle;
