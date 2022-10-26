import Header from '../header/header';
import Footer from '../footer/footer';
import { BENEFITS } from '../../../mocks/benefits';
import MainPage from '../../pages/main-page/main-page';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage benefits={BENEFITS} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
