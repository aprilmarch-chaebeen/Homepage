import styled from 'styled-components';

function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <h1>APRILMARCH</h1>
      </Link>
      <List>
        <ListItem>
          <Link href="">Portfolio</Link>
        </ListItem>
        <ListItem>
          <Link href="">Voucher</Link>
        </ListItem>
        <ListItem>
          <Link href="">중소기업 서포트</Link>
        </ListItem>
        <ListItem>
          <Link href="">About us</Link>
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
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export default Navbar;
