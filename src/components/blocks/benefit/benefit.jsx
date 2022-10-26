import { Header, StyledBenefit, Text, Title } from './styled';
import BenefitsType from '../../ui/benefits-type/benefit-type';

function Benefit({ type, title, text, img, type_title }) {
  return (
    <StyledBenefit type={type}>
      <Header img={img}>
        <Title>{title}</Title>
        <BenefitsType type={type}>{type_title}</BenefitsType>
      </Header>
      <Text>{text}</Text>
    </StyledBenefit>
  );
}

export default Benefit;
