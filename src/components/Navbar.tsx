import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logosrc from '../assets/svg/BI_logo.svg';

function Navbar() {
  return (
    <Nav>
      <GoToPage to="/">
        <Logo src={logosrc} alt="Main Logo" />
      </GoToPage>
      <List>
        <ListItem>
          <GoToPage to="/portfolio">포트폴리오</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/voucher">바우처</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/support">중소기업 서포트</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/support">공공기관</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/about">About us</GoToPage>
        </ListItem>
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8vw 3.5vw;
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
`;

export default Navbar;
