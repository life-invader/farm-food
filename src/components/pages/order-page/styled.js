import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: #f6f6f6;
  flex-grow: 1;
`;

export const StyledWrapper = styled.div`
  padding: 40px 90px;
  width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 353px 727px;
  gap: 20px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
`;

export const StyledLabel = styled.label`
  padding: 15px 50px 14px 0;
  display: block;
  position: relative;
`;

export const AddressInput = styled.input`
  display: block;
  width: 100%;
  background-color: #f6f6f6;
  padding: 13px 12px;
  margin-top: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 21px;
  font-family: inherit;

  ::placeholder {
    color: #333333;
  }
`;

export const Price = styled.p`
  margin: 8px 0 32px 0;
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
`;
