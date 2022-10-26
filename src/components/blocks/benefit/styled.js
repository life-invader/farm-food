import styled from 'styled-components';
import BenefitsType from '../../ui/benefits-type/benefit-type';
import { P } from '../../../elements/index';
import { BenefitTypeEnum } from '../../../constants/benefits';

const BenefitBgColor = {
  [BenefitTypeEnum.Farm]: {
    'background-color': '#e1edce',
  },
  [BenefitTypeEnum.Shop]: {
    'background-color': '#f8ddd7',
  },
};

export const StyledBenefit = styled.article`
  padding: 20px;
  background-color: #e1edce;
  height: 100%;

  ${(props) => {
    const bgColor = BenefitBgColor[props.type];

    return `
    background-color: ${bgColor['background-color']};
    `;
  }}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 72px;
  background-repeat: no-repeat;
  background-position: left center;

  ${(props) => {
    return `
      background-image: ${`url(${props.img})`};
    `;
  }}

  ${BenefitsType} {
    order: -1;
  }
`;

export const Title = styled.h3`
  margin: 4px 0 0;
`;

export const Text = styled(P)`
  margin-top: 20px;
`;
