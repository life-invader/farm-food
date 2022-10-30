import { PromoContainer, Section, PromoWrapper, Title, Text } from './styled';

function Promo() {
  return (
    <Section>
      <PromoContainer>
        <PromoWrapper>
          <Title>Магазин фермерских продуктов с доставкой</Title>
          <Text>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до
            отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем
            продукты максимально свежими.
          </Text>
        </PromoWrapper>
      </PromoContainer>
    </Section>
  );
}

export default Promo;
