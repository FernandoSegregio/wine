import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 832px 1fr;
  height: 731px;

      & > div {
      margin: 30.77px auto;
      width: 100%;
        
        & > span {
        display: flex;
        margin-left: 16%;
        cursor: pointer;
        width: 106px;
     

          & > p {
            margin-left: 16px;
            font-family: Neo Sans;
    
            font-weight: 400;
            font-size: var(--font-size-20);
            line-height: 24px;
            color: var(--brand-color-black-100);
          }

          & > svg {
            font-size: 22px;
          } 
      }
    }
`;

export const ImageContainer = styled.div`
  height: 579px;
  margin-left: 33%;
  margin-top: 50px;
  width: 381px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  margin-top: 80.77px;

    button {
      border-radius: 4px;
      border: none;
      color: var(--brand-color-white-100);
      height: 56px;
      width: 328px;
      background-color: var(--brand-color-green-100);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
      font-family: 'Lato';
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-16);
      line-height: 19px;
      text-align: center;
    }
`;

export const OriginAndTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-around;
  width: 462.22px;
  
    & > div:nth-of-type(1) {
    align-items: center;
    column-gap: 8px;
    display: flex;

      & > p {
      color: var(--brand-color-pink-100);
      font-family: 'Lato';
      font-size: var(--font-size-14);
      font-weight: var(--font-weight-bold);
      line-height: 20px;
      } 

      & > span {
        color: var(--brand-color-gray-100);
        font-family: 'Lato';
        font-size: var(--font-size-14);
        font-weight: var(--font-weight-normal);
        line-height: 24px;
      }

      & > svg {
        color: var(--brand-color-gray-100);
      }
    }

    h1 {
      font-family: Neo Sans;
      font-size: var(--font-size-28);
      font-weight: var(--font-weight-bold);
      line-height: 32px;
      color: var(--brand-color-black-100);
    }

    & > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      column-gap: 8px;

        & > p {
        font-family: 'Lato';
        font-size: var(--font-size-14);
        font-weight: var(--font-weight-bold);
        line-height: 24px;
        color: var(--brand-color-gray-default);
        } 

    }
`;

export const PriceContainer = styled.div`
  height: 59px;
  width: 462.22px;

    h1 {
      color: var(--brand-color-pink-100);
      font-family: 'Lato';
      font-size: var(--font-size-40);
      font-weight: var(--font-weight-900);
      line-height: 40px;      
  
      & > span {
        line-height: 10px;
        font-size: var(--font-size-32);
      }

      & > span:nth-of-type(1) {
        font-size: var(--font-size-24);
      }
    }

    & > p {
      align-items: center;
      color: var(--brand-color-gray-100);
      display: flex;
      font-family: 'Lato';
      font-size: var(--font-size-16);
      font-weight: var(--font-weight-700);
      line-height: 19px;
      text-transform: uppercase;

    }
`;

export const SommelierContainer = styled.div`
  height: 137px;
  width: 462.22px;
    
    h3 {
      font-family: Neo Sans;
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-16);
      line-height: 24px;
      color: var(--brand-color-black-100);
      margin-bottom: 8px;
    }
    


    & > p {
      font-family: 'Saira';
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-14);
      line-height: 21px;
      color: var(--brand-color-gray-200);

    }
`;
