import styled from 'styled-components';
import Image from 'next/image'

export const ImageStyle = styled(Image)`
  height: 198.57px;
  min-width: 0%;
  max-width: 0%;
  min-height: 0%;
  max-height: 0%;
`;

export const CardContainer = styled.div`
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
  text-align: center;
  width: 232.64px;
`;
export const DiscountContainer = styled.div`
  align-items: center; 
  display: flex;
`;
