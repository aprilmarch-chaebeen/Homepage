import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logosrc from '../assets/svg/BI_logo.svg';
import naviconsrc from '../assets/svg/nav_icon.svg';

function Navbar() {
  return (
    <Nav>
      <GoToPage to="/">
        <Logo src={logosrc} alt="Main Logo" />
      </GoToPage>
      <List>
        <Icon src={naviconsrc} alt="nav icon" />
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
        <ListItem>
          <GoToPage to="/">IT 대시보드</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/">About us</GoToPage>
        </ListItem>
      </List>
      <div style={{width: '10vw'}}></div>
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
  width: 10vw;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2vw;
  padding: 0.5vw 1vw 0.5vw 0.6vw;
  background-color: #f2f2f2;
  border-radius: 3vw;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 0.9vw;
`;

const Icon = styled.img`
  width: 2vw;
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-family: 'Pretendard-Light';
`;

export default Navbar;
