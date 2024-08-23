import styled from 'styled-components';
import arrowsrc from '../../assets/svg/arrow_outward.svg';

interface HomeCounselProp {
  organ: string;
}

function HomeCounsel({organ}: HomeCounselProp) {
  return (
    <CounselContainer>
      <span>{organ}</span>
      <Arrow src={arrowsrc} alt="Arrow" />
    </CounselContainer>
  );
}

export default HomeCounsel;

const CounselContainer = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-family: 'Pretendard-Regular';
  font-size: 1.1vw;
`;

const Arrow = styled.img`
  width: 1vw;
`;
