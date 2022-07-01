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
  
      box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
      height: 333px;
  width: 256px;
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

  color: var(--brand-color-gray-100);
`;
