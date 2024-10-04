import styled from 'styled-components';
import SubCategory from './SubCategory';
import ProjectCard from './ProjectCard';
import rivalsrc from '../../assets/svg/portfolio/rival.svg';
import cupsrc from '../../assets/svg/portfolio/cup.svg';
import koreasrc from '../../assets/svg/portfolio/korea.svg';
import lgdnssrc from '../../assets/svg/portfolio/lgdns.svg';
import lgsrc from '../../assets/svg/portfolio/lg.svg';
import misiksrc from '../../assets/svg/portfolio/misik.svg';
import kbssrc from '../../assets/svg/portfolio/kbs.svg';
import collegesrc from '../../assets/svg/portfolio/college.svg';
import {useAppSelector} from '../../hook/reduxHook';
import {selectPortfolioFilterValue} from '../../reducers/portfolioFilterSlice';
import {selectProjectIdxValue} from '../../reducers/projectCurIdxSlice';
import {Paginate} from '../../api/paginate';
import ProjectPagination from './ProjectPagination';
import React, {useMemo} from 'react';
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
    imgsrc: cupsrc,
    category: ['all', 'fashion'],
    flag: 'cup',
    num: 2,
  },
  {
    title: '무형문화재 보존',
    descript: '브랜딩, 웹 반응형 사이트 제작',
    imgsrc: koreasrc,
    category: ['all', 'public'],
    flag: 'korea',
    num: 2,
  },
  {title: 'LG CNS D&A', descript: '웹 반응형 사이트 제작, 3D 모션그래픽', imgsrc: lgdnssrc, category: ['all', 'it'], flag: 'lgdns', num: 2},
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
];

function BrandingCategory() {
  const selectedCategory = useAppSelector(selectPortfolioFilterValue);
  const currentIdx = useAppSelector(selectProjectIdxValue);

  const {currentProjects, totalPages} = useMemo(() => {
    return Paginate({projects, currentIdx, selectedCategory});
  }, [currentIdx, selectedCategory]);

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
  padding: 0 15vw;
  gap: 1vw;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 5vw;
    gap: 2vw;
  }
`;
