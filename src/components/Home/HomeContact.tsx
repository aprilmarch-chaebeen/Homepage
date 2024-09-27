import styled from 'styled-components';
import ContactCard from './ContactCard';

const CardDescript = [
  '제조혁신바우처 수행사ㆍ전통문화바우처 수행사 전략적인 디자인과 컨설팅으로 브랜드를 지원하겠습니다.',
  '프로젝트 의뢰 및 협업 관련하여 이메일을 남겨주시면 빠른시간내로 프로젝트 담당자가 연락드리겠습니다.',
  '서울시를 포함한 주요 공공기관과 다수의 대학교 홍보물 디자인 수행경험으로 완성도 높은 결과물을 창출하겠습니다.',
];

function HomeContact() {
  return (
    <section>
      <BigText>Contact us</BigText>
      <SmallText>
        어디서부터 무엇을 시작해야 할지 막막하시다면
        <br />
        고민의 처음부터 APRILMARCH가 함께 하겠습니다.
      </SmallText>
      <CardContainer>
        <ContactCard title="정부지원 바우처" descript={CardDescript[0]} />
        <ContactCard title="신사업,신규브랜드" descript={CardDescript[1]} />
        <ContactCard title="공공기관,대학" descript={CardDescript[2]} />
      </CardContainer>
    </section>
  );
}

export default HomeContact;

const BigText = styled.h2`
  margin-top: 12vw;
  font-family: 'Gotham';
  font-size: 2.8vw;
  margin-bottom: 2vw;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Light';
  color: #555;
  margin-bottom: 4vw;
  font-size: 1vw;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 0.05vw;
`;
