import Button from '../../ui/button/button';
import Benefit from '../benefit/benefit';
import './benefits.css';

function Benefits({ benefits = [] }) {
  return (
    <section className="benefits">
      <h2 className="benefits__title">Почему фермерские продукты лучше?</h2>
      <ul className="benefits__list">
        {benefits.map((item) => {
          return (
            <li className="benefits__item" key={item.id}>
              <Benefit {...item} />
            </li>
          );
        })}
      </ul>

      <Button>Купить</Button>
    </section>
  );
}

export default Benefits;
