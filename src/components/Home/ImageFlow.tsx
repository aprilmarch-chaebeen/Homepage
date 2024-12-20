import styled from 'styled-components';

interface ImageFlowProp {
  srcSet: string[];
}

function ImageFlow({srcSet}: ImageFlowProp) {
  return (
    <ImgContainer>
      {srcSet.map((src, index) => (
        <Logo src={src} alt="src" key={index} />
      ))}
    </ImgContainer>
  );
}

export default ImageFlow;

const ImgContainer = styled.div`
  display: flex;
  margin: 2.3vw 0;

  @media (max-width: 1280px) {
    margin: 2.7vw 0;
  }

  @media (max-width: 480px) {
    margin: 5vw 0;
  }
`;

const Logo = styled.img`
  height: 1.3vw;
  margin-right: 10vw;

  @media (max-width: 1280px) {
    height: 1.8vw;
  }

  @media (max-width: 480px) {
    height: 4vw;
  }
`;
