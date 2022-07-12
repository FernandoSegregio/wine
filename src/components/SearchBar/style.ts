import styled from 'styled-components';

const SearchContainer = styled.div`
  align-items: center;
  background-color: var(--brand-color-white-150);
  box-shadow: 0 2px 20px 0 #00000026;
  height: 73px;
  position: absolute;
  top: 88px;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;

    form {
      width: 80%;
    }

    input {
      border-radius: 4px;
      border: unset;
      color: var(--brand-color-gray-200);
      font-family: Lato;
      font-size: var(--font-size-20);
      font-weight: var(--font-weight-bold);
      height: 44px;
      outline: none;
      padding-left: 30px;
      width: 100%;
    }

    svg {
      color: var(--brand-color-pink-100);
      height: 26px;
      position: absolute;
      margin-right: 22px;
      right: 10%;
      top: 26px;
      transform: rotate(270deg);
      width: 26px;
    }
`;

export default SearchContainer;
