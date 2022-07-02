import styled from 'styled-components';

export const CartContainer = styled.div`
  right: 0;
  z-index: 2;
  background-color: var(--brand-color-white-150);
  height: 100vw;
  position: fixed;
  transition-property: all;
  -webkit-transition-property: all;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  transition-delay: 0s;
  -webkit-transition-delay: 0s;
  width: 350px;
`;

export const HeaderCart = styled.header`
  height: 60px;
  background-color: var(--brand-color-white-100);
  display: flex;
  padding: 20px;

    > svg {
      font-size: 22px;
      margin-right: 20px;
    }

    > p {
    font-family: sans-serif;
    color: var(---brand-color-black-200);
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-normal);
    } 

    > span {
    font-family: sans-serif;
    color: var(---brand-color-black-200);
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-normal);
    } 
`;
