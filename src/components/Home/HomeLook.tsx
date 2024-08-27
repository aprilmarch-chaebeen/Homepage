import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import seciconsrc from '../../assets/svg/sec_icon_black.svg';
import looktextsrc from '../../assets/svg/look_txt.svg';

const transition = {
  ease: 'easeInOut',
  duration: 0.7,
  y: {duration: 0.7},
};

const imgSrc = [
  'img/look_img01.svg',
  'img/look_img02.svg',
  'img/look_img03.svg',
  'img/look_img04.svg',
  'img/look_img05.svg',
  'img/look_img06.svg',
  'img/look_img07.svg',
];
function HomeLook() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imgSrc.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <LookSection>
      <Text1>
        <p>
          Make <br /> It
          <br /> Look
        </p>
      </Text1>
      <Text2>
        <BigText>
          Brand <br /> Marketing <br /> Company <br /> APRILMARCH
        </BigText>
        <SmallText>
          We are creating the <br />
          world's story with <br />
          passion for the brand <br />
          and meaningful concerns.
        </SmallText>
      </Text2>
      <motion.div initial={{opacity: 0, y: 130}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={transition}>
        <GoodContainer>
          <LookText src={looktextsrc} alt="look txt" />
          <ImgBox>
            <LookImg src={imgSrc[imgIndex]} alt="look imgages" />
          </ImgBox>
        </GoodContainer>
      </motion.div>
    </LookSection>
  );
}

export default HomeLook;

const LookSection = styled.section`
  position: relative;
  background-color: #fff;
  height: 62vw;
  text-align: left;
  line-height: 1.2;
  margin-top: 15vw;

  &::before {
    content: '';
    position: absolute;
    top: 5vw;
    left: 6vw;
    width: 2vw;
    height: 2vw;
    background: url(${seciconsrc}) no-repeat center / cover;
  }
`;

const Text1 = styled.div`
  position: absolute;
  top: 5vw;
  right: 34vw;
  font-size: 3vw;
  line-height: 1.5;
  font-family: 'Gotham-Light';
  font-weight: 300;
`;

const Text2 = styled.div`
  position: absolute;
  top: 20vw;
  right: 15vw;
`;

const BigText = styled.h3`
  font-size: 2.5vw;
  font-family: 'Gotham';
  margin-bottom: 1.5vw;
`;

const SmallText = styled.p`
  font-size: 1vw;
  font-family: 'Gotham-Light';
  font-weight: 600;
`;

const GoodContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 46vw;
  margin: 0 auto;
  padding-top: 24vw;
`;

const LookText = styled.img`
  width: 100%;
`;

const ImgBox = styled.div`
  position: absolute;
  bottom: -0.5vw;
  left: -0.5vw;
  width: 22vw;
  height: 22vw;
`;

const LookImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;