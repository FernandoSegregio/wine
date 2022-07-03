import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 832px;
  gap: 32px;
`;

export const ViewMore = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: var(--font-size-18);
  text-align: center;
  text-decoration: underline;
  padding: 60px;
    
`;
