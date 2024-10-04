import styled from 'styled-components';
import FieldCategory from './FieldCategory';
import FieldDescript from './FieldDescript';
import { useState, useEffect } from 'react';

const voucher = [
  '정부지원바우처',
  '제조혁신바우처・전통문화바우처 수행사',
  '에이프릴마치는 체계적인 컨설팅과 전략적인 디자인으로 브랜드를 지원합니다',
  '에이프릴마치에서 국가 지원 사업을 시작해보세요',
];
const voucher_mobile = [
  '정부지원바우처',
  '제조혁신바우처・전통문화바우처 수행사',
  <>
  에이프릴마치는 체계적인 컨설팅과<br />전략적인 디자인으로 브랜드를 지원합니다
  </>
  ,
  '에이프릴마치에서 국가 지원 사업을 시작해보세요',
];
const newBrand = [
  '신사업・신규브랜드',
  <>
    디자인, 브랜딩, 마케팅 캠페인에 이르는 <span style={{ fontFamily: 'Pretendard-SemiBold' }}>Full Service Creative</span>
  </>,
  '에이프릴마치는 디자인, 브랜딩, 마케팅 캠페인에 이르는',
  'Full Service Creative로 고객사를 지원합니다',
];
const it = [
  'IT 대시보드',
  <>
    한눈에 알기쉬운 기업별 맞춤형 <span style={{ fontFamily: 'Pretendard-SemiBold' }}>운영・분석・결과 대시보드</span>
  </>,
  '지속적인 실시간 정보 리포팅을 대시보드 용도에 맞춰 기획하며,',
  '시각적 데이터를 적시성을 강조해 대시보드를 제작합니다',
];
const university = [
  '공공기관 대학',
  <>
    사업 주최와 참여기관이 이원화 된 <span style={{ fontFamily: 'Pretendard-SemiBold' }}>공공기관 운영/관리 경험 多</span>
  </>,
  '디자인 실행 업무를 넘어, 사업주최와 참여기관이 이원화 된',
  '과업의 다수 운영 경험에서 쌓아온 노하우로 모두가 만족하는 결과물 창출하겠습니다',
];
const university_mobile = [
  '공공기관 대학',
  <>
    사업 주최와 참여기관이 이원화 된 <span style={{ fontFamily: 'Pretendard-SemiBold' }}>공공기관 운영/관리 경험 多</span>
  </>,
  '디자인 실행 업무를 넘어, 사업주최와 참여기관이 이원화 된',
  <>
  과업의 다수 운영 경험에서 쌓아온 노하우로<br />모두가 만족하는 결과물 창출하겠습니다
  </>
  ,
];

function HomeField() {
  const [activeIndex, setActiveIndex] = useState(0); // 활성화된 카테고리 인덱스
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480); // 모바일 여부 확인

  const categories = [
    { title: '정부지원 바우처 수행사', descript: isMobile ? voucher_mobile : voucher, name: 'voucher', mobile: 'voucher_mobile' },
    { title: '신사업・신규브랜드', descript: newBrand, name: 'new', mobile: 'new_mobile' },
    { title: 'IT 대시보드', descript: it, name:'it', mobile: 'it_mobile' },
    { title: '공공기관・대학', descript: isMobile ? university_mobile : university, name: 'pub', mobile: 'pub_mobile' },
  ];

  const handleCategoryClick = (index: number) => {
    setActiveIndex(index);
  };

  // 윈도우 리사이즈 이벤트 핸들러
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <CategorySection>
        {categories.map((category, index) => (
          <div key={index}>
            <FieldCategory
              title={category.title}
              onClick={() => handleCategoryClick(index)}
              clicked={activeIndex === index}
              name={isMobile ? category.mobile : category.name}
            />
            {isMobile && activeIndex === index && (
              <FieldDescript
                descript={category.descript}
                name={category.name}
                num={index === 0 || index === 3 ? 3 : 2}
                pad={index === 1 ? 6 : index === 2 ? 9 : index === 3 ? 8 : 0}
              />
            )}
          </div>
        ))}
      </CategorySection>
      {!isMobile && (
        <DescriptSection>
          {categories.map((category, index) => (
            activeIndex === index && (
              <FieldDescript
                key={index}
                descript={category.descript}
                name={category.name}
                num={index === 0 || index === 3 ? 3 : 2}
                pad={index === 1 ? 6 : index === 2 ? 9 : index === 3 ? 8 : 0}
              />
            )
          ))}
        </DescriptSection>
      )}
    </Section>
  );
}

export default HomeField;

const Section = styled.section`
  display: flex;

  @media (max-width: 480px) {
    display: block;
  }
`;

const CategorySection = styled.div`
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DescriptSection = styled.div`
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
