import styled, { css } from 'styled-components';

export const Checkbox = styled.span`
  width: 24px;
  height: 24px;
  background-color: #f6f6f6;
  background-color: ${(props) => (props.isChecked ? '#fc9b27' : '#f6f6f6')};
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  position: absolute;
  top: 16px;
  right: 0;

  ${(props) =>
    props.isChecked &&
    css`
      ::before {
        content: '';
        position: absolute;
        background-image: url('assets/tic.svg');
        background-repeat: no-repeat;
        background-position: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    `}
`;
