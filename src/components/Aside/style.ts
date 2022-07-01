import styled from 'styled-components';

const AsideContainer = styled.aside`
  h1 {
    color: var(--brand-color-black-200);
    font-family: Lato;
    font-size: var(-font-size-20);
    font-weight: var(--font-weight-bold);
    line-height: 24px;
  }

  p {
    color: var(--brand-color-gray-300);
    font-family: Lato;
    font-size: var(-font-size-18);
    font-weight: var(--font-weight-bold);
    line-height: 22px
  }

  label {
    display: flex;
    color: var(--brand-color-gray-300);
    font-family: Lato;
    font-size: var(-font-size-14);
    font-weight: var(--font-weight-normal);
    line-height: 17px
  }
`;

export default AsideContainer;
