import styled from 'styled-components';
import ContactCard from './ContactCard';

const CardDescript = [
  '프로젝트 의뢰 및 협업 관련하여 이메일을 남겨주시면 빠른시간내로 프로젝트 담당자가 연락드리겠습니다.',
  '프로젝트 의뢰 및 협업 관련하여 이메일을 남겨주시면 빠른시간내로 프로젝트 담당자가 연락드리겠습니다.',
  '프로젝트 의뢰 및 협업 관련하여 이메일을 남겨주시면 빠른시간내로 프로젝트 담당자가 연락드리겠습니다.',
];

function HomeContact() {
  return (
    <section>
      <BigText>Contact us</BigText>
      <SmallText>상담 신청을 해주시면 빠른 시간내에 연락 드리겠습니다</SmallText>
      <CardContainer>
        <ContactCard title="바우처" descript={CardDescript[0]} />
        <ContactCard title="강소기업" descript={CardDescript[1]} />
        <ContactCard title="공공기관&대학" descript={CardDescript[2]} />
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
  gap: 0.1vw;
  width: 100vw;
`;
