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
  margin: 1.5rem 0;
`;

const Logo = styled.img`
  height: 1.5vw;
  margin-right: 5rem;
`;
