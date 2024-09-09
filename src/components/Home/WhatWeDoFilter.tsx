import {useState} from 'react';
import styled, {css} from 'styled-components';
import checksrc from '../../assets/svg/check.svg';

function WhatWeDoFilter() {
  const [nowFilter, setNowFilter] = useState('all');

  return (
    <FilterContainer>
      <Container>
        <FilterBtn onClick={() => setNowFilter('all')} $clicked={nowFilter === 'all'}>
          {nowFilter === 'all' && <Check src={checksrc} alt="check icon" />}
          전체
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('bx')} $clicked={nowFilter === 'bx'}>
          {nowFilter === 'bx' && <Check src={checksrc} alt="check icon" />}
          BX
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('uiux')} $clicked={nowFilter === 'uiux'}>
          {nowFilter === 'uiux' && <Check src={checksrc} alt="check icon" />}
          UI UX
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('public')} $clicked={nowFilter === 'public'}>
          {nowFilter === 'public' && <Check src={checksrc} alt="check icon" />}
          PUBLIC
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('voucher')} $clicked={nowFilter === 'voucher'}>
          {nowFilter === 'voucher' && <Check src={checksrc} alt="check icon" />}
          VOUCHER
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
  width: 35vw;
  height: 2.5vw;
  background-color: #f2f2f2;
  padding: 0.2vw;
  margin: 4vw auto;
  border-radius: 29px;
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  &:nth-child(1) {
    font-family: 'Pretendard-Regular';
  }
`;

const FilterBtn = styled.button<{$clicked: boolean}>`
  border: none;
  cursor: pointer;
  color: #222;
  background-color: transparent;
  font-size: 1.2vw;
  padding: 0.3vw 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.$clicked &&
    css`
      color: #fff;
      background-color: #171717;
      border-radius: 29px;
    `}
`;

const Check = styled.img`
  width: 1vw;
  margin-right: 0.5vw;
`;
