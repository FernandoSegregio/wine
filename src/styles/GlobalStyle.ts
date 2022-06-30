import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle
