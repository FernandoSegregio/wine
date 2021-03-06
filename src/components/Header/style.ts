import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: var(--brand-color-white-100);
  border-bottom: 2px solid var(--brand-color-gray-050);
  column-gap: 18%;
  display: flex;
  height: 88.23px;
  justify-content: center;
  padding: 0 100px; 

  .loja-vinhos {
      border-bottom: 4px solid var(--brand-color-pink-100);
      > a {
        color: var(--brand-color-pink-100)
      };
    }

      @media screen and (max-width: 1100px) {
            justify-content: space-between;
      }
`;

export const LogoAndNav = styled.div`
  align-items: center;
  column-gap: 83.15px;
  display: flex;

    span {
      height: 28px !important;
      width: 100px !important;
    }
`;

export const IconsHeader = styled.div`
  display: flex;
  height: 56px;
  justify-content: space-between;
  width: 254.97px;

    button {
      background-color: transparent;
      border: none;
      height: 56px;
      width: 56px;
      margin: 0 6px;
    }

    button:nth-of-type(3) {
      position: relative;

        & > span {
          background-color: var(--brand-color-white-100);
          border-radius: 50%;
          bottom: 0;
          color: var(--brand-color-green-200);
          filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.35));
          font-family: 'Lato';
          font-size: var(--font-size-12);
          font-weight: var(--font-weight-bold);
          height: 20px;
          line-height: 19px;
          position: absolute;
          right: -1px;
          text-align: center;
          width: 20px;
        }
    }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 88.23px;

      @media screen and (max-width: 1100px) {
        height: 0;
        justify-content: space-between;
        visibility: hidden;
        width: 0;
      }
`;

export const Ul = styled.ul`
  column-gap: 48px;
  display: flex;
  align-items: center;
  height: 88.23px;
`;

export const Li = styled.li`
  cursor: pointer;
  font-family: Neo Sans, sans-serif;
  font-size: var(--font-size-18);
  list-style: none;
  padding: 34px 4px;
  height: 86px;

  &:hover {
    border-bottom: 2px solid var(--brand-color-pink-100);

    > a {
      color: var(--brand-color-pink-100);
    }
  }
    > a {
      color: var(--brand-color-gray-default);
      text-decoration: none;
    } 
`;
