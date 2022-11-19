import styled, { css } from 'styled-components';

const FontSizes = {
  S: css`
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  `,
};

const Text = styled.p`
  margin-top: ${(props) => props.mt || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};

  padding-top: ${(props) => props.pt || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-bottom: ${(props) => props.pb || 0};
  padding-left: ${(props) => props.pl || 0};

  ${(props) => FontSizes[props.type]}
`;
export default Text;
