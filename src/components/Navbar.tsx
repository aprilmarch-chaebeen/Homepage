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
        <GoToPage to="/">
          <Circle>
            <Icon src={naviconsrc} alt="nav icon" />
          </Circle>
        </GoToPage>
        <ListItem>
          <GoToPage to="/portfolio">포트폴리오</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/voucher">바우처</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/newbusiness">신규브랜드 신사업</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/public">공공기관 대학</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/itdashboard">IT 대시보드</GoToPage>
        </ListItem>
        <ListItem>
          <GoToPage to="/about">About us</GoToPage>
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
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  z-index: 100;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 0.9vw;

  &:nth-child(7) {
    margin-right: 1vw;
  }
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
  width: 0.9vw;
  animation: ${IconAnimation} 7s linear infinite;
  /* margin-left: 0.1vw; */
  margin-bottom: 0.05vw;
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-family: 'Pretendard-Light';
`;

export default Navbar;
