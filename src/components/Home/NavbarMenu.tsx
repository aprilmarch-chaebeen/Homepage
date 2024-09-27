import styled from 'styled-components';
import closesrc from '../../assets/svg/close.svg';
import logosrc from '../../assets/svg/menu_logo.svg';
import {useAppDispatch} from '../../hook/reduxHook';
import {closeMenu} from '../../reducers/homeMenuSlice';

function NavbarMenu() {
  const dispatch = useAppDispatch();

  const handleMenuClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(closeMenu());
  };

  return (
    <Container>
      <CloseBtn onClick={(e) => handleMenuClicked(e)}>
        <Close src={closesrc} alt="close button" />
      </CloseBtn>
      <MenuContainer>
        <Menu>바우처</Menu>
        <Line></Line>
        <Menu>신규 브랜드 신사업</Menu>
        <Line></Line>
        <Menu>IT 대시보드</Menu>
        <Line></Line>
        <Menu>공공기관 대학</Menu>
        <Line></Line>
        <Menu>포트폴리오</Menu>
        <Line></Line>
        <Menu>About us</Menu>
        <Line></Line>
        <Menu>Contact</Menu>
      </MenuContainer>
      <LogoContainer>
        <Logo src={logosrc} alt="menu logo" />
      </LogoContainer>
    </Container>
  );
}

export default NavbarMenu;

const Container = styled.div`
  width: 100vw;
  height: 178vw;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const CloseBtn = styled.button`
  background: none;
  cursor: pointer;
  border: 0;
  text-align: right;
  margin-top: 5vw;
  margin-right: 8vw;
`;

const Close = styled.img`
  width: 7vw;
`;

const MenuContainer = styled.div`
  padding: 0 9vw 0 7vw;
`;

const Menu = styled.p`
  font-family: 'Pretendard-Regualr';
  font-size: 5vw;
`;

const Line = styled.div`
  border-bottom: 0.1vw solid #ccc;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 17vw;
  margin-bottom: 21vw;
`;
