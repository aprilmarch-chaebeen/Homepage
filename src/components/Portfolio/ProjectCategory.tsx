import {useState} from 'react';
import AllCategory from './AllCategory';
import BrandingCategory from './BrandingCategory';
import EtcCategory from './EtcCategory';
import styled, {css} from 'styled-components';
import WebAppCategory from './WebAppCategory';
import EditorialCategory from './EditorialCategory';
import {useAppDispatch} from '../../hook/reduxHook';
import {changeFilter} from '../../reducers/portfolioFilterSlice';
import {changeIdx} from '../../reducers/projectCurIdxSlice';

function ProjectCategory() {
  const [nowCategory, setNowCategory] = useState('all');
  const dispatch = useAppDispatch();

  const renderCategory = () => {
    switch (nowCategory) {
      case 'all':
        return <AllCategory />;
      case 'branding':
        return <BrandingCategory />;
      case 'webapp':
        return <WebAppCategory />;
      case 'editorial':
        return <EditorialCategory />;
      case 'etc':
        return <EtcCategory />;
      default:
        return <AllCategory />;
    }
  };

  const handleCategoryClicked = (category: string) => {
    setNowCategory(category);
    dispatch(changeFilter('all'));
    dispatch(changeIdx(1));
  };

  return (
    <section>
      <Category>
        <List>
          <CategoryBtn onClick={() => handleCategoryClicked('all')} $clicked={nowCategory === 'all'}>
            전체
          </CategoryBtn>
        </List>
        <List>
          <CategoryBtn onClick={() => handleCategoryClicked('branding')} $clicked={nowCategory === 'branding'}>
            Branding
          </CategoryBtn>
        </List>
        <List>
          <CategoryBtn onClick={() => handleCategoryClicked('webapp')} $clicked={nowCategory === 'webapp'}>
            Web&App
          </CategoryBtn>
        </List>
        <List>
          <CategoryBtn onClick={() => handleCategoryClicked('editorial')} $clicked={nowCategory === 'editorial'}>
            Editorial
          </CategoryBtn>
        </List>
        <List>
          <CategoryBtn onClick={() => handleCategoryClicked('etc')} $clicked={nowCategory === 'etc'}>
            기타
          </CategoryBtn>
        </List>
      </Category>
      {renderCategory()}
    </section>
  );
}

export default ProjectCategory;

const Category = styled.ul`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0 5vw;
    margin: 5vw 0;
  }
`;

const List = styled.li`
  list-style: none;
`;

const CategoryBtn = styled.button<{$clicked: boolean}>`
  border: none;
  background-color: transparent;
  color: #777;
  border-bottom: 0.2vw solid #e0e0e0;
  padding: 1vw 3vw;
  cursor: pointer;
  height: 3.3vw;
  font-size: 1vw;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;

  ${(p) =>
    p.$clicked &&
    css`
      color: #1c46f5;
      border-bottom: 0.2vw solid #1c46f5;
    `}

  @media (max-width: 1024px) {
    font-size: 1.6vw;
    height: 4vw;
    border-bottom-width: 0.3vw;
    padding: 0.8vw 5.3vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
    height: 6vw;
    border-bottom-width: 0.5vw;
    padding: 0.5vw 3.5vw;
  }
`;
