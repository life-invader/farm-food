import styled from 'styled-components';

export const BenefitsSection = styled.section`
  width: 1280px;
  margin: 0 auto;
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  margin: 64px 0 64px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;
