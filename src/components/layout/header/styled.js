import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 90px;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;
