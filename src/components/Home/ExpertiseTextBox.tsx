import styled from 'styled-components';

interface ExpertiseTextBoxProp {
  text: {title: string; num: string; descript: string[]};
}

function ExpertiseTextBox({text}: ExpertiseTextBoxProp) {
  return (
    <ExpertiseBox>
      <TitleBox>
        <TitleBox>
          {text.num} <br /> {text.title}
        </TitleBox>
      </TitleBox>
      <DescriptContainer>
        {text.descript.map((data, index) => (
          <Descript key={index}>{data}</Descript>
        ))}
      </DescriptContainer>
    </ExpertiseBox>
  );
}

export default ExpertiseTextBox;

const ExpertiseBox = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1.8vw;

  &:nth-child(-n + 2)::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 0.05vw;
    background-color: #000;
  }

  &:nth-child(2) {
    padding: 5.8vw 0;
  }

  &:nth-child(3) {
    padding-top: 1.8vw;
  }
`;

const TitleBox = styled.div`
  margin-right: 3.7vw;
  min-width: 10.6vw;
  font-family: 'Gotham-Medium';
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
  font-family: 'Gotham';
  font-size: 0.8vw;
  line-height: 1.8;
`;
