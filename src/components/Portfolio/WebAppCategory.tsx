import SubCategory from './SubCategory';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import {useAppSelector} from '../../hook/reduxHook';
import {selectPortfolioFilterValue} from '../../reducers/portfolioFilterSlice';
import rivalsrc from '../../assets/svg/portfolio/rival.svg';
import dongkwangsrc from '../../assets/svg/portfolio/dongkwang.svg';
import cupsrc from '../../assets/svg/portfolio/cup.svg';
import lpointsrc from '../../assets/svg/portfolio/lpoint.svg';
import koreasrc from '../../assets/svg/portfolio/korea.svg';
import lgdnssrc from '../../assets/svg/portfolio/lgdns.svg';
import lgcnssrc from '../../assets/svg/portfolio/lgcns.svg';
import eastersrc from '../../assets/svg/portfolio/easter.svg';
import xsolutionsrc from '../../assets/svg/portfolio/xsolution.svg';
import buttersrc from '../../assets/svg/portfolio/butter.svg';
import lgcns24src from '../../assets/svg/portfolio/lgcns24.svg';
import kbsrc from '../../assets/svg/portfolio/kb.svg';
import optimasrc from '../../assets/svg/portfolio/optima.svg';
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
    title: '법무법인 동광',
    descript: '웹 반응형 사이트 제작',
    imgsrc: dongkwangsrc,
    category: ['all', 'medical'],
    flag: 'dongkwang',
    num: 2,
  },
  {
    title: 'CUP BY CUP',
    descript: '브랜딩, 웹 반응형 사이트 제작, 3D 모션 그래픽, 상품제작, 상세페이지',
    imgsrc: cupsrc,
    category: ['all', 'fashion'],
    flag: 'cup',
    num: 2,
  },
  {title: 'L.POINT', descript: '웹&모바일', imgsrc: lpointsrc, category: ['all', 'fashion'], flag: 'lpoint', num: 2},
  {
    title: '무형문화재 보존',
    descript: '브랜딩, 웹 반응형 사이트 제작',
    imgsrc: koreasrc,
    category: ['all', 'public'],
    flag: 'korea',
    num: 2,
  },
  {title: 'LG CNS D&A', descript: '웹 반응형 사이트 제작, 3D 모션그래픽', imgsrc: lgdnssrc, category: ['all', 'it'], flag: 'lgdns', num: 2},
  {title: 'LG CNS MOP 23년도', descript: '웹 반응형 사이트 제작', imgsrc: lgcnssrc, category: ['all', 'it'], flag: 'lgcns', num: 2},
  {title: 'Easter C&I', descript: '웹 반응형 사이트 제작', imgsrc: eastersrc, category: ['all', 'game', 'it'], flag: 'easter', num: 3},
  {title: 'X-Solution', descript: '웹 반응형 사이트 제작', imgsrc: xsolutionsrc, category: ['all', 'it'], flag: 'xsolution', num: 2},
  {title: '버터몰', descript: '웹 반응형 사이트 제작, 상세페이지', imgsrc: buttersrc, category: ['all', 'fashion'], flag: 'butter', num: 4},
  {title: 'LG CNS MOP 24년도', descript: '웹 반응형 사이트 제작', imgsrc: lgcns24src, category: ['all', 'it'], flag: 'lgcns24', num: 2},
  {title: 'KB 국민카드', descript: '웹 반응형 사이트 제작', imgsrc: kbsrc, category: ['all', 'finance'], flag: 'kbs', num: 4},
  {title: '옵티마솔루션', descript: '웹 반응형 사이트 제작', imgsrc: optimasrc, category: ['all', 'it'], flag: 'optima', num: 2},
];

function WebAppCategory() {
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

export default WebAppCategory;

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
