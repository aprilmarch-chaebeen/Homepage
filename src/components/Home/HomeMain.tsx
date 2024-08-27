import styled from 'styled-components';
import HomeMainText from './HomeMainText';
import {useState} from 'react';

function HomeMain() {
  const [bxHovered, setBxHovered] = useState(false);
  const [uxuiHovered, setUxuiHovered] = useState(false);
  const [voucherHovered, setVoucherHovered] = useState(false);
  const [publicHovered, setPublicHovered] = useState(false);

  return (
    <MainSection>
      <SmallText>We think.</SmallText>
      <HomeMainText
        title="BX"
        idx={0}
        onMouseEnter={() => setBxHovered(true)}
        onMouseLeave={() => setBxHovered(false)}
        hovered={uxuiHovered || voucherHovered || publicHovered}
        nowHovered={bxHovered}
      />
      <HomeMainText
        title="UX/UI"
        idx={1}
        onMouseEnter={() => setUxuiHovered(true)}
        onMouseLeave={() => setUxuiHovered(false)}
        hovered={voucherHovered || publicHovered}
        nowHovered={uxuiHovered}
      />
      <HomeMainText
        idx={2}
        title="VOUCHER"
        onMouseEnter={() => setVoucherHovered(true)}
        onMouseLeave={() => setVoucherHovered(false)}
        hovered={publicHovered}
        nowHovered={voucherHovered}
      />
      <HomeMainText
        title="PUBLIC"
        idx={3}
        onMouseEnter={() => setPublicHovered(true)}
        onMouseLeave={() => setPublicHovered(false)}
        nowHovered={publicHovered}
      />
    </MainSection>
  );
}

export default HomeMain;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-bottom: 7vw;
`;

const SmallText = styled.p`
  color: #ff5900;
  margin: 0;
  font-weight: 600;
  margin-top: 5vw;
  margin-bottom: 5vw;
  font-family: 'Gotham';
  font-size: 1vw;
`;
