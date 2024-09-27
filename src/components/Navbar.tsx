import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import logosrc from '../assets/svg/BI_logo.svg';
import naviconsrc from '../assets/svg/star_w.svg';
import menusrc from '../assets/svg/menu.svg';
// import NavbarMenu from './Home/NavbarMenu';

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
      <Box></Box>
      <Menu src={menusrc} alt="menu btn" />
      {/* <NavbarMenu /> */}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 3.7vw;
  height: 3.5vw;

  @media (max-width: 1280px) {
    padding: 2vw 4.7vw;
  }

  @media (max-width: 480px) {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    padding: 3vw 6vw;
    height: auto;
  }
`;

const Logo = styled.img`
  width: 10vw;

  @media (max-width: 1280px) {
    width: 15vw;
  }

  @media (max-width: 480px) {
    width: 30vw;
  }
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

  @media (max-width: 1280px) {
    padding: 0.6vw 0.6vw 0.5vw 0.6vw;
    width: 50vw;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 0.9vw;

  &:nth-child(7) {
    margin-right: 1vw;
  }

  @media (max-width: 1280px) {
    font-size: 1.2vw;
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

  @media (max-width: 1280px) {
    width: 3vw;
    height: 3vw;
  }
`;

const Icon = styled.img`
  width: 0.9vw;
  animation: ${IconAnimation} 7s linear infinite;
  /* margin-left: 0.1vw; */
  margin-bottom: 0.05vw;

  @media (max-width: 1280px) {
    width: 1.5vw;
  }
`;

const GoToPage = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-family: 'Pretendard-Light';
`;

const Box = styled.div`
  width: 10vw;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Menu = styled.img`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: 7.5vw;
    cursor: pointer;
  }
`;

export default Navbar;
