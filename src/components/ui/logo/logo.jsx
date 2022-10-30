import { LogoLink, Text } from './styled';

function Logo() {
  return (
    <LogoLink href="/">
      <img className="logo__img" src={'assets/logo.svg'} alt="Логотип Фермерские продукты." />
      <Text>Фермерские продукты</Text>
    </LogoLink>
  );
}

export default Logo;
