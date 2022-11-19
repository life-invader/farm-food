import Price from '../../../ui/price/price';
import Text from '../../../ui/text/text';

function DescriptionTab({ text, weight, price }) {
  return (
    <>
      <Text mt="16px" mb="14px" type="S">
        {text}
      </Text>
      <Price as="span">
        {price} руб. / {weight.total} гр.
      </Price>
    </>
  );
}

export default DescriptionTab;
