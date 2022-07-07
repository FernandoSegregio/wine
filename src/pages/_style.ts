import styled from 'styled-components';

const Container = styled.div`
  column-gap: 32px;
  display: grid;
  grid-template-columns: 256px 1fr;
  padding: 38.77px 160px;

    @media screen and (max-width: 1220px) {
      display: grid;
      grid-template-columns: 1fr;
      padding: 38.77px 70px;
    }

    & main > h1 > span {
    color: var(--brand-color-gray-350);
    font-family: Lato;
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-bold);
    line-height: 22px;
    padding-bottom: 32px;
    }

    & main > h1 {
    color: var(--brand-color-gray-350);
    font-family: Lato;
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    padding-bottom: 32px;
    }
`;

export default Container;
