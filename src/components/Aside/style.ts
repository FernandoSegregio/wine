import styled from 'styled-components';

const AsideContainer = styled.aside`
  h1 {
    color: var(--brand-color-black-200);
    font-family: Lato;
    font-size: var(-font-size-20);
    font-weight: var(--font-weight-bold);
    line-height: 24px;
    margin-bottom: 32px;
  }

  input {
    height: 16px;
    width: 15.89px;
  }

  p {
    color: var(--brand-color-gray-300);
    font-family: Lato;
    font-size: var(-font-size-18);
    font-weight: var(--font-weight-bold);
    line-height: 22px;
    margin-bottom: 16px;
  }

  label {
    align-items: center;
    display: flex;
    color: var(--brand-color-gray-300);
    font-family: Lato;
    font-size: var(-font-size-14);
    font-weight: var(--font-weight-normal);
    line-height: 42px;
    column-gap: 13.72px;
  }
`;

export default AsideContainer;
