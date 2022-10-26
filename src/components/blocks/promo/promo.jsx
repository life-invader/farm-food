import './promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__wrapper">
          <h2 className="promo__title">Магазин фермерских продуктов с доставкой</h2>
          <p className="promo__text">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до
            отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем
            продукты максимально свежими.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Promo;
