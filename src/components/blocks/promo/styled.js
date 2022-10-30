import styled from 'styled-components';
import dudeImg from '../../../assets/img/dude.svg';

export const Section = styled.section`
  background-color: #d8ecfe;
  position: relative;
`;

export const PromoContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 183px 90px;
  background-image: url(${dudeImg});
  background-repeat: no-repeat;
  background-position: right 90px top 37px;
`;

export const PromoWrapper = styled.div`
  max-width: 530px;
`;

export const Title = styled.h2`
  font-size: 44px;
  line-height: 51px;
  font-weight: 700;
  margin: 0;
`;

export const Text = styled.p`
  margin: 24px 0 0;
`;
