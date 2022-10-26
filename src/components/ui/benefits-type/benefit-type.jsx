import { BenefitTypeEnum } from '../../../constants/benefits';
import styled from 'styled-components';

const BenefitTypeOptions = {
  [BenefitTypeEnum.Farm]: {
    color: '#ffffff',
    'background-color': '#88aa4d',
  },
  [BenefitTypeEnum.Shop]: {
    color: '#ffffff',
    'background-color': '#d75531',
  },
};

export const BenefitType = styled.p`
  margin: 0;
  padding: 2px 10px;
  background-color: #ffffff;

  ${(props) => {
    const typeStyles = BenefitTypeOptions[props.type];

    return `
      color: ${typeStyles.color};
      background-color: ${typeStyles['background-color']};
    `;
  }}
`;

export default BenefitType;
