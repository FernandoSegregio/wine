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
  z-index: 1;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px 15px;
      text-align: flex-start;
      height: 400px;
      overflow: overlay;
      padding-right: 20px;

        & > p:nth-of-type(1) {
          color: var(--brand-color-gray-075);
          font-size: var(--font-size-32);
          font-weight: var(--font-weight-600);
          margin: 0 0 15px;
        }

        & > p:nth-of-type(2) {
          color: var(--brand-color-gray-400);
          font-size: var(--font-size-20);
          font-weight: var(--font-weight-bold);
        }
    }

`;

export const HeaderCart = styled.header`
  align-items: center;
  background-color: var(--brand-color-white-100);
  display: flex;
  height: 63px;
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

    & > p {
    color: var(--brand-color-black-200);
    font-family: sans-serif;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-600);
    } 

    > span {
    color: var(--brand-color-black-200);
    font-family: sans-serif;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-normal);
    } 
`;

export const FooterCart = styled.footer`
  align-items: center;
  background-color: var(--brand-color-white-100);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  padding: 0 10px;
  position: fixed;
  width: 350px;

    div {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 90%;

        & > h3 {
          color: var(--brand-color-gray-200);
          font-family: 'Lato';
          font-size: var(--font-size-20);
          font-weight: var(--font-weight-600)
        }

        & > h1 {
          color: var(--brand-color-pink-100);
          font-family: 'Lato';
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-28);
        }

    }

    button {
        background-color: var(--brand-color-green-100);
        border-radius: 4px;
        border: none;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
        color: var(--brand-color-white-100);
        font-family: 'Lato';
        font-size: var(--font-size-16);
        font-weight: var(--font-weight-bold);
        height: 50px;
        line-height: 19px;
        padding: 10px;
        text-align: center;
        width: 90%;
      }
`;

export const CloseCart = styled.button`
  background-color: var(--brand-color-black-200);
  opacity: 0.3;
  border: none;
  height: 100vw;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
