import Button from '../../ui/button/button';
import Benefit from '../benefit/benefit';
import { BenefitsSection, Title, BenefitsList } from './styled';

function Benefits({ benefits = [] }) {
  return (
    <BenefitsSection>
      <Title>Почему фермерские продукты лучше?</Title>
      <BenefitsList>
        {benefits.map((item) => {
          return (
            <li key={item.id}>
              <Benefit {...item} />
            </li>
          );
        })}
      </BenefitsList>

      <Button type="button">Купить</Button>
    </BenefitsSection>
  );
}

export default Benefits;
