import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <Nav>
      <GoToPage to="/">
        <h1>APRILMARCH</h1>
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
  height: 100px;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 70px;
  font-size: 1.2vw;
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export default Navbar;
