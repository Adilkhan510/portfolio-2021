import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: poppins
}

/* html,
body {
  overflow-x: hidden;
} */

`;
export default GlobalStyle;

export const primaryColor = css`
  color: #3dcfd3;
`;

export const darkColor = css`
  color: #161616;
`;
export const ternaryColor = css`
  color: #898989;
`;

export const lightColor = css`
  color: #f2f2f2;
`;
