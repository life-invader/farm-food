import { StyledUl } from './styled';
import Product from './product';

function ProductsList({ products = [] }) {
  return (
    <StyledUl>
      {products.map((item) => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      ))}
    </StyledUl>
  );
}

export default ProductsList;
