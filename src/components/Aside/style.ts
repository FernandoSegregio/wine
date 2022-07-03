import styled from 'styled-components';

export const AsideContainer = styled.aside`
  h1 {
    color: var(--brand-color-black-200);
    font-family: Lato;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-bold);
    line-height: 24px;
    margin-bottom: 32px;
  }


  p {
    color: var(--brand-color-gray-300);
    font-family: Lato;
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-bold);
    line-height: 22px;
    margin-bottom: 16px;
  }

`;

export const BorderInput = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;

      span {
      color: var(--brand-color-gray-300);
      font-family: Lato;
      font-size: var(--font-size-14);
      font-weight: var(--font-weight-normal);
      line-height: 42px;   
      margin-left: 31.6px;
      
      

        &:hover {
          color: var(--brand-color-pink-100);
        }
    }

    label {
      background: transparent;
      border-radius: 50%;
      border: 2px solid var(--brand-color-gray-050);
      
      cursor: pointer;
      
      height: 16px;
      left: 0;
      
      position: absolute;
      top: 13px;
      width: 16px;
   
      &:hover::after {
        background-color: var(--brand-color-pink-050);
        border: 2px solid white;
        border-radius: 50%;
        content: "";
        height: 6px;
        left: 1px;
        position: absolute;
        top: 1px;
        width: 6px;
      }

    }

    input[type="radio"] {
      visibility: hidden;
      height: 16px;
      width: 16px;
      top: 12px;
      left: 0;
      position: absolute;
    
      &:checked {
        visibility: visible;
        accent-color: var(--brand-color-pink-100);
        background: var(--brand-color-pink-100);
        border: 2px solid var(--brand-color-pink-100);

          span {
            color: var(--brand-color-pink-100);
          }
      }
    } 
`;

export const Label = styled.label`

`;
