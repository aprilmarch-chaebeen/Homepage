import styled from 'styled-components';
import FieldCategory from './FieldCategory';
import FieldDescript from './FieldDescript';
import {useState} from 'react';

const voucher = [
  '정부지원바우처',
  '제조혁신바우처・전통문화바우처 수행사',
  '에이프릴마치는 체계적인 컨설팅과 전략적인 디자인으로 브랜드를 지원합니다',
  '에이프릴마치에서 국가 지원 사업을 시작해보세요',
];
const newBrand = [
  '신사업・신규브랜드',
  <>
    디자인, 브랜딩, 마케팅 캠페인에 이르는 <span style={{fontFamily: 'Pretendard-SemiBold'}}>Full Service Creative</span>
  </>,
  '에이프릴마치는 디자인, 브랜딩, 마케팅 캠페인에 이르는',
  'Full Service Creative로 고객사를 지원합니다',
];
const it = [
  'IT 대시보드',
  <>
    한눈에 알기쉬운 기업별 맞춤형 <span style={{fontFamily: 'Pretendard-SemiBold'}}>운영・분석・결과 대시보드</span>
  </>,
  '지속적인 실시간 정보 리포팅을 대시보드 용도에 맞춰 기획하며,',
  '시각적 데이터를 적시성을 강조해 대시보드를 제작합니다',
];
const university = [
  '공공기관 대학',
  <>
    사업 주최와 참여기관이 이원화 된 <span style={{fontFamily: 'Pretendard-SemiBold'}}>공공기관 운영/관리 경험 多</span>
  </>,
  '디자인 실행 업무를 넘어, 사업주최와 참여기관이 이원화 된',
  '과업의 다수 운영 경험에서 쌓아온 노하우로 모두가 만족하는 결과물 창출하겠습니다',
];

function HomeField() {
  const [voucherClicked, setVoucherClicked] = useState(true);
  const [newClicked, setNewClicked] = useState(false);
  const [itClicked, setItClicked] = useState(false);
  const [publicClicked, setPublicClicked] = useState(false);

  const handleVoucherClicked = () => {
    setVoucherClicked(true);
    setNewClicked(false);
    setItClicked(false);
    setPublicClicked(false);
  };

  const handleNewClicked = () => {
    setVoucherClicked(false);
    setNewClicked(true);
    setItClicked(false);
    setPublicClicked(false);
  };

  const handleItClicked = () => {
    setVoucherClicked(false);
    setNewClicked(false);
    setItClicked(true);
    setPublicClicked(false);
  };

  const handlePublicClicked = () => {
    setVoucherClicked(false);
    setNewClicked(false);
    setItClicked(false);
    setPublicClicked(true);
  };

  return (
    <Section>
      <CategorySection>
        <FieldCategory title={'정부지원 바우처 수행사'} onClick={handleVoucherClicked} clicked={voucherClicked} name="voucher" />
        <FieldCategory title={'신사업・신규브랜드'} onClick={handleNewClicked} clicked={newClicked} name="new" />
        <FieldCategory title={'IT 대시보드'} onClick={handleItClicked} clicked={itClicked} name="it" />
        <FieldCategory title={'공공기관・대학'} onClick={handlePublicClicked} clicked={publicClicked} name="pub" />
      </CategorySection>
      <DescriptSection>
        {voucherClicked && <FieldDescript descript={voucher} name="voucher" num={3} />}
        {newClicked && <FieldDescript descript={newBrand} name="new" num={2} pad={6} />}
        {itClicked && <FieldDescript descript={it} name="it" num={2} pad={9} />}
        {publicClicked && <FieldDescript descript={university} name="pub" num={3} pad={8} />}
      </DescriptSection>
    </Section>
  );
}

export default HomeField;

const Section = styled.section`
  width: 100vw;
  display: flex;
`;

const CategorySection = styled.div`
  width: 50%;
`;

const DescriptSection = styled.div`
  width: 50%;
`;
