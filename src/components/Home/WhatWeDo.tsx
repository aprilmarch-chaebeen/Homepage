import styled from 'styled-components';
import moresrc from '../../assets/svg/read_more.svg';
import WhatWeDoFilter from './WhatWeDoFilter';
import WhatWeDoSlide from './WhatWeDoSlide';

function WhatWeDo() {
  return (
    <WhatWeDoSec>
      <BigText>What we do</BigText>
      <MediumText>
        고객사에 가장 최적화된 <br /> <BoldText>브랜딩을 제안합니다</BoldText>
      </MediumText>
      <SmallText>디자인과 브랜딩을 향한 우리의 전문성과 열정, 진심의 영향력은 든든한 믿음과 새로운 기쁨을 전달합니다.</SmallText>
      <WhatWeDoFilter />
      <WhatWeDoSlide />
      <ReadMoreBtn>
        <ReadMore src={moresrc} alt="read more button" />
      </ReadMoreBtn>
    </WhatWeDoSec>
  );
}

export default WhatWeDo;

const WhatWeDoSec = styled.section`
  position: relative;
  overflow: hidden;
`;

const BigText = styled.p`
  margin-top: 15vw;
  margin-bottom: 2.1vw;
  font-family: 'Cardo';
  font-size: 1.2vw;
  color: #1c46f5;
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 2.1vw;
  margin: 0;
  margin-bottom: 2.5vw;
  line-height: 1.4;
`;

const BoldText = styled.span`
  font-family: 'Pretendard-SemiBold';
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 0.9vw;
  margin: 0;
  color: #555;
`;

const ReadMoreBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: 87%;
  transform: translate(-50%, 50%);
  z-index: 12;
`;

const ReadMore = styled.img`
  width: 11.2vw;
`;
