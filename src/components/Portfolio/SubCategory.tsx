import styled, {css} from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../hook/reduxHook';
import {changeFilter, selectPortfolioFilterValue} from '../../reducers/portfolioFilterSlice';

function SubCategory() {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectPortfolioFilterValue);

  return (
    <Category>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('all'))} $clicked={category === 'all'}>
          전체
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('public'))} $clicked={category === 'public'}>
          공공기관/정부
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('medical'))} $clicked={category === 'medical'}>
          병원/의료/법률
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('educate'))} $clicked={category === 'educate'}>
          교육
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('finance'))} $clicked={category === 'finance'}>
          금융/보험
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('it'))} $clicked={category === 'it'}>
          IT/어플
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('entertain'))} $clicked={category === 'entertain'}>
          엔터테인먼트/방송
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('fashion'))} $clicked={category === 'fashion'}>
          패션/뷰티/쇼핑몰
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('process'))} $clicked={category === 'process'}>
          식품제조/가공
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('game'))} $clicked={category === 'game'}>
          게임/스포츠
        </CategoryBtn>
      </List>
      <List>
        <CategoryBtn onClick={() => dispatch(changeFilter('etc'))} $clicked={category === 'etc'}>
          기타
        </CategoryBtn>
      </List>
    </Category>
  );
}

export default SubCategory;

const Category = styled.ul`
  display: flex;
  justify-content: center;
  margin: 3vw 0;
  padding: 0 21vw;
  flex-wrap: wrap;
  gap: 0.4vw;
  height: 5vw;

  @media (max-width: 1024px) {
    margin-bottom: 7vw;
    padding: 0 10vw;
  }

  @media (max-width: 480px) {
    padding: 0 2vw;
    gap: 1vw;
    margin-bottom: 9vw;
    height: 26vw;
  }
`;

const List = styled.li`
  list-style: none;
  height: 2.1vw;

  @media (max-width: 480px) {
    height: 6.5vw;
  }
`;

const CategoryBtn = styled.button<{$clicked: boolean}>`
  border: none;
  background-color: #f2f2f2;
  color: #888;
  cursor: pointer;
  border-radius: 3vw;
  padding: 0.5vw 2vw;
  font-size: 1vw;
  font-family: 'Pretendard-Regular', sans-serif;
  height: 2.1vw;

  ${(p) =>
    p.$clicked &&
    css`
      color: #fff;
      background-color: #1c46f5;
    `}

  @media (max-width: 1024px) {
    font-size: 1.6vw;
    padding: 0.6vw 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
    padding: 1vw 3vw;
    height: 6.5vw;
  }
`;
