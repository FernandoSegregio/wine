import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Neo Sans';
    src: url('/fonts/neo-sans-std-regular.otf');
  }

  :root {

    --font-size-10: 0.625rem; /* 10px */
    --font-size-11: 0.6875rem; /* 11px */
    --font-size-12: 0.75rem; /* 12px */
    --font-size-14: 0.875rem; /* 14px */
    --font-size-16: 1rem; /* 16px */
    --font-size-18: 1.125rem; /* 18px */
    --font-size-20: 1.25rem; /* 20px */
    --font-size-23: 1.4375rem; /* 23px */ 
    --font-size-24: 1.5rem; /* 24px */ 
    --font-size-28: 1.75rem; /* 28px */ 
    --font-size-32: 2rem; /* 32px */

    --font-weight-300: 300;
    --font-weight-500: 500;
    --font-weight-600: 600; 
    --font-weight-bold: bold;
    --font-weight-900: 900;
    --font-weight-normal: normal;

    --brand-color-white-100: #FFFFFF;
    --brand-color-white-150: #F5F5F5;
    --brand-color-white-200: #F5F8FA;
    
    --brand-color-black-100: #111111;
    --brand-color-black-200: #000000;
    
    --brand-color-gray-default: #555555;
    --brand-color-gray-050: #CCCCCC;
    --brand-color-gray-075: #C0C0C0;
    --brand-color-gray-100: #888888;
    --brand-color-gray-200: #666666;
    --brand-color-gray-300: #333333;
    --brand-color-gray-350: #262626;
    --brand-color-gray-400: #1D1D1B;

    --brand-color-green-100:  #7EBC43;
    --brand-color-orange-100:  #F79552;
    --brand-color-yellow-100:  #F9B950;
    --brand-color-pink-050:  #b6116e61;
    --brand-color-pink-100:  #B6116E;
  }
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    background-color: var(--brand-color-white-150);
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle
