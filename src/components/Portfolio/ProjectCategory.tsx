import {useState} from 'react';
import AllCategory from './AllCategory';
import BrandingCategory from './BrandingCategory';
import EtcCategory from './EtcCategory';
import HomePageCategory from './HomepageCategory';
import styled from 'styled-components';

function ProjectCategory() {
  const [category, setCategory] = useState('all');

  const handleCategoryClick = (nowCategory: string) => setCategory(nowCategory);

  return (
    <div>
      <Category>
        <li>
          <CategoryBtn onClick={() => handleCategoryClick('all')}>전체</CategoryBtn>
        </li>
        <li>
          <CategoryBtn onClick={() => handleCategoryClick('branding')}>브랜딩</CategoryBtn>
        </li>
        <li>
          <CategoryBtn onClick={() => handleCategoryClick('homepage')}>홈페이지</CategoryBtn>
        </li>
        <li>
          <CategoryBtn onClick={() => handleCategoryClick('etc')}>기타</CategoryBtn>
        </li>
      </Category>
      {category &&
        (() => {
          switch (category) {
            case 'all':
              return <AllCategory />;
            case 'branding':
              return <BrandingCategory />;
            case 'homepage':
              return <HomePageCategory />;
            case 'etc':
              return <EtcCategory />;
          }
        })()}
    </div>
  );
}

export default ProjectCategory;

const Category = styled.ul`
  display: flex;
  justify-content: center;
`;

const CategoryBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
