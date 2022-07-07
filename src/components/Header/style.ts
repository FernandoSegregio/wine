import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: var(--brand-color-white-100);
  border-bottom: 2px solid var(--brand-color-gray-050);
  column-gap: 217.13px;
  display: flex;
  height: 88.23px;
  justify-content: center;
  width: 100%;

  .loja-vinhos {
      border-bottom: 4px solid var(--brand-color-pink-100);
      > a {
        color: var(--brand-color-pink-100)
      };
    }
`;

export const LogoAndNav = styled.div`
  column-gap: 83.15px;
  display: flex;
`;

export const IconsHeader = styled.div`
  display: flex;
  height: 56px;
  justify-content: space-between;
  width: 254.97px;

    button {
      background-color: transparent;
      border: none;
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
