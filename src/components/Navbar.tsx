import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import logosrc from '../assets/svg/BI_logo.svg';
import naviconsrc from '../assets/svg/star_w.svg';
import menusrc from '../assets/svg/menu.svg';
import NavbarMenu from './Home/NavbarMenu';
import {useAppDispatch, useAppSelector} from '../hook/reduxHook';
import {menuValue, openMenu} from '../reducers/homeMenuSlice';

function Navbar() {
  const menuState = useAppSelector(menuValue);
  const dispatch = useAppDispatch();

  const handleMenuClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(openMenu());
  };

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
      <Box href="/contact">
        <Contact>프로젝트 문의</Contact>
      </Box>
      <MenuBtn onClick={(e) => handleMenuClicked(e)}>
        <Menu src={menusrc} alt="menu btn" />
      </MenuBtn>
      {menuState && <NavbarMenu />}
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

  @media (max-width: 1024px) {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    padding: 2vw 0;
    height: auto;
    position: fixed;
    top: 0;
    width: 100vw;
    background: #fff;
    z-index: 100;
    justify-content: space-around;
    gap: 28vw;
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

  @media (max-width: 1024px) {
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
  font-family: 'Pretendard-Light', sans-serif;
`;

const Box = styled.a`
  width: 10vw;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Contact = styled.p`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 0.9vw;
  color: #000;
`;

const MenuBtn = styled.button`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 9.5vw;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

const Menu = styled.img``;

export default Navbar;
