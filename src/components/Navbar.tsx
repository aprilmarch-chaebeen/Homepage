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
          <GoToPage to="/portfolio">Portfolio</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/voucher">Voucher</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/support">중소기업 서포트</GoToPage>
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
  padding: 0px 0px 0px 30px;
  height: 3.5rem;
`;

const Logo = styled.img`
  width: 14vw;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 70px;
  font-size: 1.25vw;
  font-family: 'Gotham';
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export default Navbar;
