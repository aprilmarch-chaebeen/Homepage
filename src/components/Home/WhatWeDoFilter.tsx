import styled, {css} from 'styled-components';
import checksrc from '../../assets/svg/check.svg';
import {useAppDispatch, useAppSelector} from '../../hook/reduxHook';
import {homeFilter, selectHomeFilterValue} from '../../reducers/homeFilterSlice';

function WhatWeDoFilter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectHomeFilterValue);

  const handleAllClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(homeFilter('all'));
  };

  const handleBxClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(homeFilter('bx'));
  };

  const handleUiuxClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(homeFilter('ux'));
  };

  const handlePublicClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(homeFilter('public'));
    ``;
  };

  const handleVoucherClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(homeFilter('voucher'));
  };

  return (
    <FilterContainer>
      <Container>
        <FilterBtn onClick={(e) => handleAllClicked(e)} $clicked={filter === 'all'}>
          {filter === 'all' && <Check src={checksrc} alt="check icon" />}
          <Text>All</Text>
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={(e) => handleBxClicked(e)} $clicked={filter === 'bx'}>
          {filter === 'bx' && <Check src={checksrc} alt="check icon" />}
          <Text>BX</Text>
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={(e) => handleUiuxClicked(e)} $clicked={filter === 'ux'}>
          {filter === 'ux' && <Check src={checksrc} alt="check icon" />}
          <Text>UIㆍUX</Text>
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={(e) => handlePublicClicked(e)} $clicked={filter === 'public'}>
          {filter === 'public' && <Check src={checksrc} alt="check icon" />}
          <Text>PUBLIC</Text>
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={(e) => handleVoucherClicked(e)} $clicked={filter === 'voucher'}>
          {filter === 'voucher' && <Check src={checksrc} alt="check icon" />}
          <Text>VOUCHER</Text>
        </FilterBtn>
      </Container>
    </FilterContainer>
  );
}
export default WhatWeDoFilter;

const FilterContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 27vw;
  height: 2.2vw;
  background-color: #f2f2f2;
  padding: 0.2vw;
  margin: 3.5vw auto;
  border-radius: 29px;
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  font-family: 'Gotham-Book';
  &:nth-child(1) {
    font-family: 'Pretendard-Regular';
  }
`;

const FilterBtn = styled.button<{$clicked: boolean}>`
  border: none;
  color: #222;
  background-color: #f2f2f2;
  font-size: 1vw;
  padding: 0.3vw 0.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.$clicked &&
    css`
      color: #fff;
      background-color: #171717;
      border-radius: 29px;
      padding: 0.3vw 1.2vw 0.37vw 0.8vw;
      &:nth-child(1) {
        font-family: 'Pretendard-Regular';
      }
    `}
`;

const Check = styled.img`
  width: 1vw;
  margin-right: 0.5vw;
`;

const Text = styled.p`
  margin: 0;
`;
