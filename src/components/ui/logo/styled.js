import styled from 'styled-components';

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.span`
  margin-left: 28px;
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: #333333;
`;
