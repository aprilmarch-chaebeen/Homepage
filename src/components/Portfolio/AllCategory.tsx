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
import lgsrc from '../../assets/svg/portfolio/lg.svg';
import misiksrc from '../../assets/svg/portfolio/misik.svg';
import kbssrc from '../../assets/svg/portfolio/kbs.svg';
import collegesrc from '../../assets/svg/portfolio/college.svg';
import abbottsrc from '../../assets/svg/portfolio/abbott.svg';
import camfurssrc from '../../assets/svg/portfolio/camfurs.svg';
import dksrc from '../../assets/svg/portfolio/dk.svg';
import limesrc from '../../assets/svg/portfolio/lime.svg';
import samsungsrc from '../../assets/svg/portfolio/samsung.svg';
import {Paginate} from '../../api/paginate';
import ProjectPagination from './ProjectPagination';
import {selectProjectIdxValue} from '../../reducers/projectCurIdxSlice';
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
  {title: 'KB 국민카드', descript: '웹 반응형 사이트 제작', imgsrc: kbsrc, category: ['all', 'finance'], flag: 'kb', num: 2},
  {title: '옵티마솔루션', descript: '웹 반응형 사이트 제작', imgsrc: optimasrc, category: ['all', 'it'], flag: 'optima', num: 2},
  {title: 'LG Optapex', descript: '브랜딩, 웹 반응형 사이트 제작', imgsrc: lgsrc, category: ['all', 'it'], flag: 'lg', num: 2},
  {title: '미식', descript: '패키지, 제품촬영, 광고 CF', imgsrc: misiksrc, category: ['all', 'fashion'], flag: 'misik', num: 5},
  {title: 'KBS', descript: '굿즈 제작', imgsrc: kbssrc, category: ['all', 'entertain', 'public'], flag: 'kbs', num: 4},
  {
    title: '서울마이칼리지',
    descript: '브랜딩, 홍보물 제작',
    imgsrc: collegesrc,
    category: ['all', 'public', 'educate'],
    flag: 'college',
    num: 2,
  },
  {title: 'Abbott', descript: '홍보물 제작', imgsrc: abbottsrc, category: ['all', 'medical'], flag: 'abbott', num: 9},
  {title: '캠퍼스라인', descript: '카탈로그', imgsrc: camfurssrc, category: ['all', 'fashion'], flag: 'camfurs', num: 12},
  {title: '동국대학교', descript: '브로슈어, 굿즈, 홍보물 제작', imgsrc: dksrc, category: ['all', 'educate'], flag: 'dk', num: 10},
  {
    title: '롯데 멤버스 Lime',
    descript: 'PPT 제작, 카탈로그, 굿즈 제작',
    imgsrc: limesrc,
    category: ['all', 'fashion'],
    flag: 'lime',
    num: 9,
  },
  {title: '삼성증권', descript: 'PPT 제작', imgsrc: samsungsrc, category: ['all', 'finance'], flag: 'samsung', num: 7},
];

function AllCategory() {
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

export default AllCategory;

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
