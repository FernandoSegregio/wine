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
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #111111;
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

export const OriginAndTypeContainer = styled.div`
  height: 108px;
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
