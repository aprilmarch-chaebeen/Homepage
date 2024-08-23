import {useState} from 'react';
import styled, {css} from 'styled-components';

function WhatWeDoFilter() {
  const [nowFilter, setNowFilter] = useState('all');

  return (
    <FilterContainer>
      <li>
        <FilterBtn onClick={() => setNowFilter('all')} $clicked={nowFilter === 'all'}>
          전체
        </FilterBtn>
      </li>
      <li>
        <FilterBtn onClick={() => setNowFilter('web')} $clicked={nowFilter === 'web'}>
          Web
        </FilterBtn>
      </li>
      <li>
        <FilterBtn onClick={() => setNowFilter('bx')} $clicked={nowFilter === 'bx'}>
          BX
        </FilterBtn>
      </li>
      <li>
        <FilterBtn onClick={() => setNowFilter('package')} $clicked={nowFilter === 'package'}>
          Package
        </FilterBtn>
      </li>
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
  background-color: #f2f2f2;
  padding: 0.5vw;
  margin: 2rem auto;
  border-radius: 29px;
`;
const FilterBtn = styled.button<{$clicked: boolean}>`
  border: none;
  cursor: pointer;
  color: #222;
  padding: 0.5vw 1.6vw;
  background-color: transparent;
  font-size: 1.3vw;
  ${(p) =>
    p.$clicked &&
    css`
      color: #fff;
      background-color: #171717;
      border-radius: 29px;
    `}
`;
