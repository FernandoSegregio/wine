import styled from 'styled-components';

export const CartContainer = styled.div`
  -webkit-transition-delay: 0s;
  -webkit-transition-duration: 0.5s;
  -webkit-transition-property: all;
  -webkit-transition-timing-function: ease;
  background-color: var(--brand-color-white-150);
  height: 100vw;
  position: fixed;
  right: 0;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: ease;
  width: 350px;
  z-index: 2;
`;

export const HeaderCart = styled.header`
  background-color: var(--brand-color-white-100);
  display: flex;
  height: 60px;
  padding: 20px;

    > button {
      background-color: transparent;
      border: none;
      height: 20px;
      margin-right: 20px;
      width: 22px;
      
        > svg {
          font-size: 22px;
        }
    }


    > p {
    color: var(---brand-color-black-200);
    font-family: sans-serif;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-normal);
    } 

    > span {
    color: var(---brand-color-black-200);
    font-family: sans-serif;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-normal);
    } 
`;
