import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import { StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
