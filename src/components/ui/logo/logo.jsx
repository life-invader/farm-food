import logo from '../../../assets/img/logo.svg';
import './logo.css';

function Logo() {
  return (
    <a className="logo__link" href="/">
      <img className="logo__img" src={logo} alt="Логотип Фермерские продукты." />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;
