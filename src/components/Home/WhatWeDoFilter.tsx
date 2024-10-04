import styled, {css} from 'styled-components';
import React, {useCallback} from 'react';
import checksrc from '../../assets/svg/check.svg';
import {useAppDispatch, useAppSelector} from '../../hook/reduxHook';
import {filterNum, homeFilter, selectHomeFilterValue} from '../../reducers/homeFilterSlice';

// FilterBtn 컴포넌트 최적화
const FilterBtn = React.memo(({onClick, clicked, label}: any) => (
  <FilterButton onClick={onClick} $clicked={clicked}>
    {clicked && <Check src={checksrc} alt="check icon" />}
    <Text>{label}</Text>
  </FilterButton>
));

function WhatWeDoFilter() {
  const dispatch = useAppDispatch();
  const home = useAppSelector(selectHomeFilterValue);

  // useCallback을 사용해 함수 메모이제이션
  const handleAllClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(homeFilter('all'));
      dispatch(filterNum(28));
    },
    [dispatch]
  );

  const handleBxClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(homeFilter('bx'));
      dispatch(filterNum(25));
    },
    [dispatch]
  );

  const handleUiuxClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(homeFilter('ux'));
      dispatch(filterNum(12));
    },
    [dispatch]
  );

  const handlePublicClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(homeFilter('pub'));
      dispatch(filterNum(6));
    },
    [dispatch]
  );

  const handleVoucherClicked = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(homeFilter('voucher'));
      dispatch(filterNum(7));
    },
    [dispatch]
  );

  return (
    <FilterContainer>
      <Container>
        <FilterBtn onClick={handleAllClicked} clicked={home.filter === 'all'} label="All" />
      </Container>
      <Container>
        <FilterBtn onClick={handleBxClicked} clicked={home.filter === 'bx'} label="BX" />
      </Container>
      <Container>
        <FilterBtn onClick={handleUiuxClicked} clicked={home.filter === 'ux'} label="UIㆍUX" />
      </Container>
      <Container>
        <FilterBtn onClick={handlePublicClicked} clicked={home.filter === 'pub'} label="PUBLIC" />
      </Container>
      <Container>
        <FilterBtn onClick={handleVoucherClicked} clicked={home.filter === 'voucher'} label="VOUCHER" />
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

  @media (max-width: 480px) {
    width: 88vw;
    height: 8.5vw;
    margin: 10vw auto;
  }
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  font-family: 'Gotham-Book', sans-serif;
`;

const FilterButton = styled.button<{$clicked: boolean}>`
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

      @media (max-width: 480px) {
        padding: 1vw 4vw 1vw 3vw;
      }
    `}

  @media (max-width: 480px) {
    font-size: 3.5vw;
    padding: 1.2vw 2.5vw;
  }
`;

const Check = styled.img`
  width: 1vw;
  margin-right: 0.5vw;

  @media (max-width: 480px) {
    width: 3vw;
  }
`;

const Text = styled.p`
  margin: 0;
`;
