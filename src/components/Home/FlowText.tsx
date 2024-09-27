import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import imgsrc from '../../assets/svg/flowimg.svg';

function FlowText() {
  return (
    <Section>
      <Marquee autoFill={true} direction="left" speed={20}>
        <Img src={imgsrc} alt="flow img" />
      </Marquee>
    </Section>
  );
}

export default FlowText;

const Section = styled.section`
  padding: 9vw 0;

  @media (max-width: 1280px) {
    padding: 13vw 0;
  }
`;

const Img = styled.img`
  width: 110vw;
  margin-right: 5vw;

  @media (max-width: 1280px) {
    width: 120vw;
  }
`;
