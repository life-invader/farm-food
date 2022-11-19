import { useState } from 'react';
import { StyledSection, StyledWrapper, StyledUl, StyledLabel, AddressInput, Price } from './styled';
import Form from '../../ui/form/form';
import FormItem from '../../ui/form-item/form-item';
import Title from '../../ui/title/title';
import StyledCheckbox from '../../ui/checkbox/checkbox';
import Text from '../../ui/text/text';
import Button from '../../ui/button/button';
import ProductsList from '../../blocks/products-list/products-list';
import { PRODUCTS } from '../../../mocks/products';

function OrderPage() {
  const [checkedState, setCheckedState] = useState(() => {
    return PRODUCTS.map(() => false);
  });

  const checkboxClickHandler = (id) => () => {
    const updatedCheckedState = checkedState.map((item, index) => (index === id ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  return (
    <StyledSection>
      <StyledWrapper>
        <Form>
          <FormItem>
            <Title as="h3" type="XS">
              Выберите продукты
            </Title>
            <StyledUl>
              {PRODUCTS.map((item, index) => {
                return (
                  <li key={item.id}>
                    <StyledCheckbox
                      labelComponent={StyledLabel}
                      text={item.title}
                      value={item.title}
                      checked={checkedState[index]}
                      onChange={checkboxClickHandler(index)}
                    />
                  </li>
                );
              })}
            </StyledUl>
          </FormItem>

          <FormItem>
            <Title as="h3" type="XS">
              Сделать заказ
            </Title>
            <label htmlFor="address" />
            <AddressInput id="address" type="text" placeholder="Введите адрес доставки" />
            <Text mt="20px" type="S">
              Цена
            </Text>
            <Price>1 200 руб.</Price>

            <Button type="submit" fullWidth>
              Купить
            </Button>
          </FormItem>
        </Form>

        <ProductsList products={PRODUCTS} />
      </StyledWrapper>
    </StyledSection>
  );
}

export default OrderPage;
