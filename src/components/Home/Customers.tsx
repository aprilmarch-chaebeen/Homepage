import Marquee from 'react-fast-marquee';
import ImageFlow from './ImageFlow';
import React, {useMemo} from 'react';
import styled from 'styled-components';
import svg1 from '../../assets/svg/songpa.svg';
import svg2 from '../../assets/svg/lotte_members.svg';
import svg3 from '../../assets/svg/dongkook.svg';
import svg4 from '../../assets/svg/cj.svg';
import svg5 from '../../assets/svg/LPoint.svg';
import svg6 from '../../assets/svg/slim9.svg';
import svg7 from '../../assets/svg/LG_CNS.svg';
import svg8 from '../../assets/svg/kbs.svg';
import svg9 from '../../assets/svg/time.svg';
import svg10 from '../../assets/svg/misik.svg';
import svg11 from '../../assets/svg/themisik.svg';
import svg12 from '../../assets/svg/lg.svg';
import svg13 from '../../assets/svg/pagoda.svg';
import svg14 from '../../assets/svg/samsung.svg';
import svg15 from '../../assets/svg/esquire.svg';
import svg16 from '../../assets/svg/audi.svg';
import svg17 from '../../assets/svg/yes24.svg';
import svg18 from '../../assets/svg/kmi.svg';
import svg19 from '../../assets/svg/spectra.svg';
import svg20 from '../../assets/svg/listerine.svg';
import svg21 from '../../assets/svg/pulito.svg';
import svg22 from '../../assets/svg/brand_aid.svg';
import svg23 from '../../assets/svg/harim.svg';
import svg24 from '../../assets/svg/theReal.svg';
import svg25 from '../../assets/svg/Butter.svg';
import svg26 from '../../assets/svg/Tamken.svg';
import svg27 from '../../assets/svg/netmarble.svg';
import svg28 from '../../assets/svg/smu.svg';
import svg29 from '../../assets/svg/smu.svg';
import svg30 from '../../assets/svg/abbott.svg';
import svg31 from '../../assets/svg/gfk.svg';
import svg32 from '../../assets/svg/campusline.svg';
import svg33 from '../../assets/svg/uri.svg';
import svg34 from '../../assets/svg/hanssem.svg';
import svg35 from '../../assets/svg/lotte.svg';
import svg36 from '../../assets/svg/cd.svg';
import svg37 from '../../assets/svg/jakorea.svg';

function Customers() {
  // useMemo로 이미지 배열을 메모이제이션하여 불필요한 재생성을 방지
  const images1 = useMemo(() => [svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10], []);
  const images2 = useMemo(() => [svg11, svg12, svg13, svg14, svg15, svg16, svg17, svg18, svg19], []);
  const images3 = useMemo(() => [svg20, svg21, svg22, svg23, svg24, svg25, svg26, svg27, svg28], []);
  const images4 = useMemo(() => [svg29, svg30, svg31, svg32, svg33, svg34, svg35, svg36, svg37], []);

  return (
    <section>
      <BigText>Client</BigText>
      <MediumText>
        에이프릴마치와 함께한
        <br />
        <BoldText>500+ 고객사</BoldText>
      </MediumText>
      <SmallText>
        지난 8년간 500여개의 브랜드와 함께하며
        <br />
        쌓아온 노하우를 바탕으로 브랜드가 직면한 어려움을 해결해 드립니다.
      </SmallText>

      {/* Marquee 컴포넌트에 key를 설정하여 성능 최적화 */}
      <Marquee autoFill={true} direction="right" speed={10} gradient={false} key="marquee1">
        <ImageFlow srcSet={images1} />
      </Marquee>
      <Marquee autoFill={true} speed={10} gradient={true} gradientWidth={300} key="marquee2">
        <ImageFlow srcSet={images2} />
      </Marquee>
      <Marquee autoFill={true} direction="right" speed={10} gradient={true} gradientWidth={500} key="marquee3">
        <ImageFlow srcSet={images3} />
      </Marquee>
      <Marquee autoFill={true} speed={10} gradient={true} gradientWidth={700} key="marquee4">
        <ImageFlow srcSet={images4} />
      </Marquee>
    </section>
  );
}

export default React.memo(Customers); // React.memo로 불필요한 재렌더링 방지

const BigText = styled.p`
  margin-top: 15vw;
  margin-bottom: 1.4vw;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2vw;
  color: #1c46f5;

  @media (max-width: 1280px) {
    font-size: 1.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
    margin-top: 40vw;
    margin-bottom: 5vw;
  }
`;

const MediumText = styled.p`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 2.1vw;
  margin: 0;
  margin-bottom: 1.45vw;
  line-height: 1.2;

  @media (max-width: 1280px) {
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 6.5vw;
  }
`;

const BoldText = styled.span`
  font-family: 'Pretendard-SemiBold', sans-serif;
`;

const SmallText = styled.p`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 0.9vw;
  margin: 0;
  color: #555;
  margin-bottom: 3.2vw;
  line-height: 1.6;

  @media (max-width: 1280px) {
    font-size: 1.4vw;
  }

  @media (max-width: 480px) {
    font-size: 3.9vw;
    padding: 0 16vw;
    margin: 5vw 0;
    margin-bottom: 8vw;
  }
`;
