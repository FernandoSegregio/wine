import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 670px 1fr;
  height: 731px;

    & > div {
      margin: 30.77px auto;
      width: 100%;
        
        & > span {
        display: flex;
        margin-left: 19%;

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
  margin-left: 41%;
  margin-top: 50px;
  width: 381px;
`;
