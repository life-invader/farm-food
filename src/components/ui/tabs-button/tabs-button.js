import styled from 'styled-components';

const TabButton = styled.button`
  color: ${(props) => (props.active ? '#ffffff' : '#333333')};
  background-color: ${(props) => (props.active ? '#88aa4d' : '#f6f6f6')};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  font-family: inherit;
`;

export default TabButton;
