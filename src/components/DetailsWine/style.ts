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
`;

export const OriginAndTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-around;
  width: 462.22px;
  
`;

export const PriceContainer = styled.div`
  height: 59px;
  width: 462.22px;
`;

export const SommelierContainer = styled.div`
  height: 137px;
  width: 462.22px;
`;
