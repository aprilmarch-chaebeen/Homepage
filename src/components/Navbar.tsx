import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logosrc from '../assets/svg/BI_logo.svg';
import contactsrc from '../assets/svg/contact.svg';

function Navbar() {
  return (
    <Nav>
      <GoToPage to="/">
        <Logo src={logosrc} alt="Main Logo" />
      </GoToPage>
      <List>
        <ListItem>
          <GoToPage to="/">About us</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/">포트폴리오</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/">바우처</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/">신규브랜드 신사업</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/">공공기관 대학</GoToPage>
        </ListItem>
      </List>
      <ContactBtn>
        <Contact src={contactsrc} alt="contact button" />
      </ContactBtn>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 3.7vw;
  height: 3.5vw;
`;

const Logo = styled.img`
  width: 11vw;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.5vw;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 0.9vw;

  &:nth-child(5) {
    font-family: 'Gotham';
  }
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-family: 'S-CoreDream-3Light';
`;

const ContactBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Contact = styled.img`
  width: 7vw;
`;

export default Navbar;
