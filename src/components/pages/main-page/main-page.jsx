import Benefits from '../../blocks/benefits/benefits';
import Promo from '../../blocks/promo/promo';

function MainPage({ benefits }) {
  return (
    <>
      <Promo />
      <Benefits benefits={benefits} />
    </>
  );
}

export default MainPage;
