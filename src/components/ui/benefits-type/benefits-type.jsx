import { BenefitTypeEnum } from '../../../constants/benefits';
import './benefits-type.css';

const BenefitTypeOptions = {
  [BenefitTypeEnum.Farm]: {
    color: '#ffffff',
    backgroundColor: '#88aa4d',
  },
  [BenefitTypeEnum.Shop]: {
    color: '#ffffff',
    backgroundColor: '#d75531',
  },
};

function BenefitType({ className = '', type, title }) {
  return (
    <p className={`benefit-type ${className}`} style={BenefitTypeOptions[type]}>
      {title}
    </p>
  );
}

export default BenefitType;
