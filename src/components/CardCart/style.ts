import styled from 'styled-components';

const CartCardContainer = styled.div`
  display: flex;
  margin: 10px 15px;
  height: 100px;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid var(--brand-color-gray-050);
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;

      p {
        color: var(--brand-color-pink-100);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-20);
      }

      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        button {
          cursor: pointer;
          border: none;
          background-color: transparent;
          padding: 5px;
          font-size: var(--font-size-16);
        }

        span {
          font-size: var(--font-size-16);
        }

      }
  }

  h1 {
    color: #333;
    font-size: 14px;
    line-height: 1.2;
  }

`;

export default CartCardContainer;
