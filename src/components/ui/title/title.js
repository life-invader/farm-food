import styled, { css } from 'styled-components';

const TitleTypes = {
  L: css`
    font-size: 44px;
    line-height: 51px;
  `,
  M: css`
    font-size: 36px;
    line-height: 41px;
  `,
  S: css`
    font-size: 24px;
    line-height: 31px;
  `,
  XS: css`
    font-size: 18px;
    line-height: 27px;
  `,
};

const Title = styled.h1`
  color: #333333;

  margin-top: ${(props) => props.mt || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};

  padding-top: ${(props) => props.pt || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-bottom: ${(props) => props.pb || 0};
  padding-left: ${(props) => props.pl || 0};

  /* Тип заголовка */
  ${(props) => {
    return TitleTypes[props.type];
  }}
`;

export default Title;
