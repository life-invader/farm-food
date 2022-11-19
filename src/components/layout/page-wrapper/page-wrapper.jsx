import Header from '../header/header';
import Footer from '../footer/footer';
import { BENEFITS } from '../../../mocks/benefits';
import MainPage from '../../pages/main-page/main-page';
import OrderPage from '../../pages/order-page/order-page';
import { Wrapper } from './styled';

function PageWrapper() {
  return (
    <>
      <Header />
      <Wrapper className="page-wrapper__main" style={{ flexGrow: 1 }}>
        {/* <MainPage benefits={BENEFITS} /> */}
        <OrderPage />
      </Wrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;
