import BenefitsType from '../benefits-type/benefit-type';
import { BenefitTypeEnum } from '../../../constants/benefits';
import './benefit.css';

const BenefitOptions = {
  [BenefitTypeEnum.Farm]: {
    backgroundColor: '#e1edce',
  },
  [BenefitTypeEnum.Shop]: {
    backgroundColor: '#f8ddd7',
  },
};

function Benefit({ type, title, text, img, type_title }) {
  const imgOptions = {
    backgroundImage: `url(${img})`,
  };

  return (
    <article className="benefit" style={BenefitOptions[type]}>
      <header className="benefit__header" style={imgOptions}>
        <h3 className="benefit__title">{title}</h3>
        <BenefitsType className="benefit__type" type={type} title={type_title} />
      </header>
      <p className="benefit__text">{text}</p>
    </article>
  );
}

export default Benefit;
