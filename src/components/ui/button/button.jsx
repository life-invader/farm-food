import styled from 'styled-components';

const Button = styled.button`
  display: block;
  min-height: 60px;
  min-width: 260px;
  max-width: 100%;
  padding: 16px;
  color: #ffffff;
  background-color: #fc9b27;
  border: none;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;

  transition: all 0.2s;

  :hover {
    background-color: #fc7427;
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
  }

  :active {
    background-color: #fc7427;
  }
`;

export default Button;
