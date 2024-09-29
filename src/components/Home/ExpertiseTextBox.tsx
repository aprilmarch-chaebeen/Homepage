import styled from 'styled-components';
import {motion} from 'framer-motion';

const transitionY = {
  ease: 'easeInOut',
  duration: 0.7,
  y: {duration: 0.7},
};

const transition = {
  ease: 'easeInOut',
  scaleX: {duration: 0.7},
  opacity: {duration: 0.7},
};

interface ExpertiseTextBoxProp {
  text: {title: string; num: string; descript: string[]; idx: number};
}

function ExpertiseTextBox({text}: ExpertiseTextBoxProp) {
  return (
    <ExpertiseBox>
      <motion.div initial={{opacity: 0, y: 130}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={transitionY}>
        <TitleBox>
          <TitleBox>
            {text.num} <br /> {text.title}
          </TitleBox>
        </TitleBox>
      </motion.div>
      <motion.div initial={{opacity: 0, y: 130}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={transitionY}>
        <DescriptContainer>
          {text.descript.map((data, index) => (
            <Descript key={index}>{data}</Descript>
          ))}
        </DescriptContainer>
      </motion.div>
      <motion.div
        initial={{opacity: 0, scaleX: 0}}
        whileInView={{opacity: 1, scaleX: 1}}
        viewport={{once: false}}
        transition={transition}
        style={{originX: 0}}
      >
        {text.idx <= 2 && <Line />}
      </motion.div>
    </ExpertiseBox>
  );
}

export default ExpertiseTextBox;

const ExpertiseBox = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1.8vw;

  &:nth-child(2) {
    padding: 5.8vw 0;
  }

  &:nth-child(3) {
    padding-top: 1.8vw;
  }
`;

const Line = styled.hr`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.05vw;
  background-color: #000;
  margin: 0;
  border: none;
`;

const TitleBox = styled.div`
  margin-right: 3.7vw;
  min-width: 10.6vw;
  font-family: 'Gotham-Medium', sans-serif;
  font-size: 0.8vw;
  line-height: 1.5;
`;

const DescriptContainer = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Descript = styled.li`
  list-style: none;
  font-family: 'Gotham', sans-serif;
  font-size: 0.8vw;
  line-height: 1.8;
`;
