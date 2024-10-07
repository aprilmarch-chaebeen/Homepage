import styled from 'styled-components';
import statuesrc from '../assets/svg/contact_statue.svg';

function Contact() {
  return (
    <Section>
      <Title>Contact</Title>
      <SubTitle>
        고객의 프로젝트를 생각하고
        <br />
        고민하는 공간입니다.
      </SubTitle>
      <TextBox>
        <p>
          <TextGray>E-mail</TextGray>
          <br />
          <TextBlack>jjw@aprilmarch.design</TextBlack>
        </p>
        <p>
          <TextGray>Tell</TextGray>
          <br />
          <TextBlack>02.6929.0990</TextBlack>
        </p>
      </TextBox>
      <Statue src={statuesrc} alt="contact statue img" />
    </Section>
  );
}

export default Contact;

const Section = styled.section`
  position: relative;
  font-family: 'Pretendard-Regular', sans-serif;
  padding: 0 10vw 10vw;
`;

const Title = styled.h1`
  font-size: 5vw;
  color: #1c46f5;
  margin-bottom: 0;
  margin-top: 3vw;
`;

const SubTitle = styled.h2`
  font-size: 3.5vw;
  color: #131313;
  line-height: 1.5;
`;

const TextBox = styled.div`
  margin-top: 7vw;
  line-height: 1.5;
`;

const TextGray = styled.span`
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 1vw;
  color: #999;
`;

const TextBlack = styled.span`
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 1vw;
  color: #131313;
`;

const Statue = styled.img`
  position: absolute;
  width: 16vw;
  top: 15vw;
  right: 13vw;
`;
