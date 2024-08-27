import {useState} from 'react';
import styled, {css} from 'styled-components';

function WhatWeDoFilter() {
  const [nowFilter, setNowFilter] = useState('all');

  return (
    <FilterContainer>
      <Container>
        <FilterBtn onClick={() => setNowFilter('all')} $clicked={nowFilter === 'all'}>
          전체
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('web')} $clicked={nowFilter === 'web'}>
          Web
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('bx')} $clicked={nowFilter === 'bx'}>
          BX
        </FilterBtn>
      </Container>
      <Container>
        <FilterBtn onClick={() => setNowFilter('package')} $clicked={nowFilter === 'package'}>
          Package
        </FilterBtn>
      </Container>
    </FilterContainer>
  );
}
export default WhatWeDoFilter;

const FilterContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 25vw;
  height: 2.5vw;
  background-color: #f2f2f2;
  padding: 0.3vw;
  margin: 4vw auto;
  border-radius: 29px;
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
`;

const FilterBtn = styled.button<{$clicked: boolean}>`
  border: none;
  cursor: pointer;
  color: #222;
  height: 2.3vw;
  width: 5.8vw;
  background-color: transparent;
  font-size: 1vw;
  padding: 0;
  ${(p) =>
    p.$clicked &&
    css`
      color: #fff;
      background-color: #171717;
      border-radius: 29px;
    `}
`;
