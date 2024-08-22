import {useState} from 'react';
import AllCategory from './AllCategory';
import BrandingCategory from './BrandingCategory';
import EtcCategory from './EtcCategory';
import HomePageCategory from './HomepageCategory';
import styled, {css} from 'styled-components';

function ProjectCategory() {
  const [nowCategory, setNowCategory] = useState('all');

  const renderCategory = () => {
    switch (nowCategory) {
      case 'branding':
        return <BrandingCategory />;
      case 'homepage':
        return <HomePageCategory />;
      case 'etc':
        return <EtcCategory />;
      case 'all':
      default:
        return <AllCategory />;
    }
  };

  return (
    <section>
      <Category>
        <li>
          <CategoryBtn onClick={() => setNowCategory('all')} $clicked={nowCategory === 'all'}>
            전체
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn onClick={() => setNowCategory('branding')} $clicked={nowCategory === 'branding'}>
            브랜딩
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn onClick={() => setNowCategory('homepage')} $clicked={nowCategory === 'homepage'}>
            홈페이지
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn onClick={() => setNowCategory('etc')} $clicked={nowCategory === 'etc'}>
            기타
          </CategoryBtn>
        </li>
      </Category>
      {renderCategory()}
    </section>
  );
}

export default ProjectCategory;

const Category = styled.ul`
  display: flex;
  justify-content: center;
`;

const CategoryBtn = styled.button<{$clicked: boolean}>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #777;
  border-bottom: 2px solid #e0e0e0;
  padding: 1rem 2.5rem;
  ${(p) =>
    p.$clicked &&
    css`
      color: #ff553e;
      border-bottom: 2px solid #ff553e;
    `}
`;
