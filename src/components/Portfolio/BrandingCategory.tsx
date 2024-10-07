import styled from 'styled-components';
import SubCategory from './SubCategory';
import ProjectCard from './ProjectCard';
import rivalsrc from '../../assets/svg/portfolio/rival.svg';
import lgdnssrc from '../../assets/svg/portfolio/lgdns.svg';
import misiksrc from '../../assets/svg/portfolio/misik.svg';
import {useAppSelector} from '../../hook/reduxHook';
import {selectPortfolioFilterValue} from '../../reducers/portfolioFilterSlice';
import {selectProjectIdxValue} from '../../reducers/projectCurIdxSlice';
import {Paginate} from '../../api/paginate';
import ProjectPagination from './ProjectPagination';
import React, {useEffect, useMemo, useState} from 'react';
import NoData from './NoData';
interface Project {
  title: string;
  descript: string;
  imgsrc: string;
  category: string[];
  flag: string;
  num: number;
}

const projects: Project[] = [
  {
    title: '라이벌',
    descript: '브랜딩, 패키지, 제품 촬영, 카탈로그, 웹 반응형 사이트 제작, 상세페이지',
    imgsrc: rivalsrc,
    category: ['all', 'fashion', 'process'],
    flag: 'rival',
    num: 5,
  },
  {
    title: 'CUP BY CUP',
    descript: '브랜딩, 웹 반응형 사이트 제작, 3D 모션 그래픽, 상품제작, 상세페이지',
    imgsrc: require('../../assets/images/project/cup.jpg').default,
    category: ['all', 'fashion'],
    flag: 'cup',
    num: 2,
  },
  {
    title: '무형문화재 보존',
    descript: '브랜딩, 웹 반응형 사이트 제작',
    imgsrc: require('../../assets/images/project/korea.jpg').default,
    category: ['all', 'public'],
    flag: 'korea',
    num: 2,
  },
  {title: 'LG CNS D&A', descript: '웹 반응형 사이트 제작, 3D 모션그래픽', imgsrc: lgdnssrc, category: ['all', 'it'], flag: 'lgdns', num: 2},
  {
    title: 'LG Optapex',
    descript: '브랜딩, 웹 반응형 사이트 제작',
    imgsrc: require('../../assets/images/project/lg.jpg').default,
    category: ['all', 'it'],
    flag: 'lg',
    num: 2,
  },
  {title: '미식', descript: '패키지, 제품촬영, 광고 CF', imgsrc: misiksrc, category: ['all', 'fashion'], flag: 'misik', num: 5},
  {
    title: 'KBS',
    descript: '굿즈 제작',
    imgsrc: require('../../assets/images/project/kbs.jpg').default,
    category: ['all', 'entertain', 'public'],
    flag: 'kbs',
    num: 4,
  },
  {
    title: '서울마이칼리지',
    descript: '브랜딩, 홍보물 제작',
    imgsrc: require('../../assets/images/project/college.jpg').default,
    category: ['all', 'public', 'educate'],
    flag: 'college',
    num: 2,
  },
];

function BrandingCategory() {
  const selectedCategory = useAppSelector(selectPortfolioFilterValue);
  const currentIdx = useAppSelector(selectProjectIdxValue);
  const [slideNum, setSlideNum] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480 && window.innerWidth <= 1024) setSlideNum(9);
      else if (window.innerWidth <= 480) setSlideNum(10);
      else setSlideNum(16);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const {currentProjects, totalPages} = useMemo(() => {
    return Paginate({projects, currentIdx, selectedCategory, slideNum});
  }, [currentIdx, selectedCategory, slideNum]);

  return (
    <section>
      <SubCategory />
      {currentProjects.length !== 0 ? (
        <Container>
          {currentProjects.map((project, index) => (
            <MemoizedProjectCard
              key={index}
              title={project.title}
              descript={project.descript}
              imgsrc={project.imgsrc}
              flag={project.flag}
              num={project.num}
            />
          ))}
        </Container>
      ) : (
        <NoData />
      )}
      <ProjectPagination total={totalPages} />
    </section>
  );
}

export default BrandingCategory;

const MemoizedProjectCard = React.memo(ProjectCard);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 16vw;
  gap: 0.9vw;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 10vw;
    gap: 1.3vw;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 7vw;
    gap: 2vw;
  }
`;
