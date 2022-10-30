import Logo from '../../ui/logo/logo';
import { P } from '../../../elements';
import { StyledFooter } from './styled';

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <P className="footer__date">Создано 2022</P>
    </StyledFooter>
  );
}

export default Footer;
