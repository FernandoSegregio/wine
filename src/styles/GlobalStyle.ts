import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --brand-color-white-100: #FFFFFF;
    --brand-color-white-200: #F5F8FA;

    --brand-color-black-200: #000000;
    
    --brand-color-gray-default: #555555;
    --brand-color-gray-100: #888888;
    --brand-color-gray-200: #666666;
    --brand-color-gray-300: #333333;
    --brand-color-gray-400: #1D1D1B;

    --brand-color-green-100:  #7EBC43;
    --brand-color-orange-100:  #F79552;
    --brand-color-yellow-100:  #F9B950;
    --brand-color-pink-100:  #B6116E;
  }
   
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
