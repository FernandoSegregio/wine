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

    input {
      font-family: Lato;
      height: 44px;
      width: 1160px;
      border: unset;
      border-radius: 4px;
      padding-left: 30px;
      font-weight: var(--font-weight-bold);
      color: var(--brand-color-gray-200);
      font-size: var(--font-size-20);
    }

    svg {
      color: var(--brand-color-pink-100);
      height: 26px;
      position: absolute;
      right: 144px;
      top: 26px;
      width: 26px;
      transform: rotate(270deg);
    }
`;

export default SearchContainer;
