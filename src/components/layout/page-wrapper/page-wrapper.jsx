import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Benefits from '../benefits/benefits';
import { BENEFITS } from '../../../mocks/benefits';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <Promo />
        <Benefits benefits={BENEFITS} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
