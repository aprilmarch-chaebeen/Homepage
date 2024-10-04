import SubCategory from './SubCategory';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import {useAppSelector} from '../../hook/reduxHook';
import {selectPortfolioFilterValue} from '../../reducers/portfolioFilterSlice';
import lgsrc from '../../assets/svg/portfolio/lg.svg';
import kbssrc from '../../assets/svg/portfolio/kbs.svg';
import collegesrc from '../../assets/svg/portfolio/college.svg';
import abbottsrc from '../../assets/svg/portfolio/abbott.svg';
import camfurssrc from '../../assets/svg/portfolio/camfurs.svg';
import dksrc from '../../assets/svg/portfolio/dk.svg';
import limesrc from '../../assets/svg/portfolio/lime.svg';
import samsungsrc from '../../assets/svg/portfolio/samsung.svg';
import ProjectPagination from './ProjectPagination';
import {selectProjectIdxValue} from '../../reducers/projectCurIdxSlice';
import {Paginate} from '../../api/paginate';
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
  {title: 'LG Optapex', descript: '브랜딩, 웹 반응형 사이트 제작', imgsrc: lgsrc, category: ['all', 'it'], flag: 'lg', num: 2},
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

function EditorialCategory() {
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

export default EditorialCategory;

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
