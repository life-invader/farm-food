import Price from '../../ui/price/price';
import Title from '../../ui/title/title';
import CharacteristicTab from '../tabs/characteristic-tab/characteristic-tab';
import DescriptionTab from '../tabs/description-tab/description-tab';
import PropertiesTab from '../tabs/properties-tab/properties-tab';
import Tabs from '../tabs/tabs';
import { Img, StyledProduct } from './styled';

const TabsTitles = ['Описание', 'Характеристики', 'Свойства'];

function Product({ description, title, img, price, characteristic, properties }) {
  const { weight } = characteristic;

  return (
    <StyledProduct>
      <div>
        <Title type="S" mb="16px">
          {title}
        </Title>
        <Tabs content={TabsTitles}>
          <DescriptionTab text={description} weight={weight} price={price} />
          <CharacteristicTab />
          <PropertiesTab />
        </Tabs>
      </div>
      <Img src={img} alt={title} width={248} height={248} />
    </StyledProduct>
  );
}

export default Product;
