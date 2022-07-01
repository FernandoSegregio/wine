import styled from 'styled-components';
import Image from 'next/image'

export const ImageStyle = styled(Image)`
  margin: 0 auto;
  max-width: 0;
  min-height: 0;
  max-height: 0;
`;

export const CardContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: 388.36px;
  row-gap: 16px;
  position: relative;
  
    section {
      align-items: center;
      background-color: var(--brand-color-white-100);
      box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 256px;
      padding-bottom: 18px;
      height: 333px;
      position: relative;

      & > span:nth-of-type(2) {
        position: absolute !important;   
        right: 20.44px;
        top: 140.19px;
      }
    }

`;

export const Name = styled.h1`
  color: var(--brand-color-gray-400);
  font-family: 'Lato';
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.222488px;
  line-height: 19px;
  margin: 0 auto;
  text-align: center;
  width: 232.64px;
  height: 42.83px;
`;

export const DiscountContainer = styled.div`
  align-items: center; 
  display: flex;
  column-gap: 5.35px;
  justify-content: center;
`;

export const ValueDiscount = styled.p`
  color: var(--brand-color-gray-100);
  font-family: 'Lato';
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-bold);
  line-height: 16px;
  text-align: center;
  text-decoration-line: line-through;
`;

export const PercentDiscount = styled.p`
  background-color: var(--brand-color-orange-100);
  border-radius: 1.94677px;
  font-family: 'Lato';
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-10);
  line-height: 12px;
  text-align: center;
  padding: calc((13.63px - 12px) / 2) calc((48.67px - 40.81px) / 2);
  color: var(--brand-color-white-100);
`;

export const MemberPriceContainer = styled.div`
  align-items: center; 
  column-gap: 6.81px;
  display: flex;
  justify-content: center;
  `;

export const Member = styled.p`
  color: var(--brand-color-gray-400);
  font-family: 'Lato';
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-bold);
  line-height: 10px;
  padding-top: 4px;
  text-align: center;
`;

export const Price = styled.p`
  color: var(--brand-color-pink-100);
  font-family: 'Lato';
  font-size: var(--font-size-23);
  font-weight: var(--font-weight-bold);
  line-height: 27.25px;
  text-align: center;
  
`;

export const NonMember = styled.p`
  color: var(--brand-color-gray-100);
  font-family: 'Lato';
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-bold);
  line-height: 14px;
  text-align: center;
  text-align: center;
`;

export const ButtonAdd = styled.button`
  background: var(--brand-color-green-100);
  border: none;
  border-radius: 3.89354px;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  color: var(--brand-color-white-100);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-bold);
  gap: 9.73px;
  height: 39.36px;
  line-height: 16px;
  padding: 11.6806px 23.3612px;
  text-align: center;
  width: 256px;
`;
