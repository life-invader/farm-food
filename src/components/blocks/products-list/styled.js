import styled from 'styled-components';
import { Ul } from '../../../elements';

// Список
export const StyledUl = styled(Ul)`
  display: grid;
  gap: 12px;
`;

// Продукт
export const StyledProduct = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 0 20px;
  padding: 20px;
`;

export const Img = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  max-width: 100%;
  display: block;
  object-fit: cover;
`;
