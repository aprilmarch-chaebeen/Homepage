import styled from 'styled-components';
import logosrc from '../../assets/svg/footer_logo.svg';

function HomeFooter() {
  return (
    <Footer>
      <Logo src={logosrc} alt="footer logo" />
      <Text1>SEOUL, SONGPA-GU, SONGPA-DAERO 167</Text1>
      <Text2>T. 02-6929-0990 | E. cyj@aprilmarch.design</Text2>
    </Footer>
  );
}

export default HomeFooter;

const Footer = styled.footer`
  padding: 5vw;
`;

const Logo = styled.img`
  width: 15vw;
`;

const Text1 = styled.p`
  font-family: 'Gotham';
  color: #858585;
  margin-top: 5vw;
  font-size: 0.7vw;
`;

const Text2 = styled.p`
  font-family: 'Gotham';
  color: #222;
  font-size: 0.7vw;
`;
