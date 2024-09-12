import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import logosrc from '../assets/svg/BI_logo.svg';
import naviconsrc from '../assets/svg/star_w.svg';

function Navbar() {
  return (
    <Nav>
      <GoToPage to="/">
        <Logo src={logosrc} alt="Main Logo" />
      </GoToPage>
      <List>
        <Circle>
          <Icon src={naviconsrc} alt="nav icon" />
        </Circle>
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

const IconAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 1vw;
  animation: ${IconAnimation} 7s linear infinite;
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-family: 'Pretendard-Light';
`;

export default Navbar;
