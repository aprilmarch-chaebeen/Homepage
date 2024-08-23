import styled from 'styled-components';
import HomeMainText from './HomeMainText';
import {useState} from 'react';

function HomeMain() {
  const [bxHovered, setBxHovered] = useState(false);
  const [uxuiHovered, setUxuiHovered] = useState(false);
  const [voucherHovered, setVoucherHovered] = useState(false);
  const [supportHovered, setSupportHovered] = useState(false);

  return (
    <MainSection>
      <SmallText>We think.</SmallText>
      <HomeMainText
        title="BX"
        onMouseEnter={() => setBxHovered(true)}
        onMouseLeave={() => setBxHovered(false)}
        hovered={uxuiHovered || voucherHovered || supportHovered}
        nowHovered={bxHovered}
      />
      <HomeMainText
        title="UX/UI"
        onMouseEnter={() => setUxuiHovered(true)}
        onMouseLeave={() => setUxuiHovered(false)}
        hovered={voucherHovered || supportHovered}
        nowHovered={uxuiHovered}
      />
      <HomeMainText
        title="VOUCHER"
        onMouseEnter={() => setVoucherHovered(true)}
        onMouseLeave={() => setVoucherHovered(false)}
        hovered={supportHovered}
        nowHovered={voucherHovered}
      />
      <HomeMainText
        title="SUPPORT"
        onMouseEnter={() => setSupportHovered(true)}
        onMouseLeave={() => setSupportHovered(false)}
        nowHovered={supportHovered}
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
  margin-bottom: 7rem;
`;

const SmallText = styled.p`
  color: #ff5900;
  margin: 0;
  font-weight: 600;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: 'Gotham';
  font-size: 0.8rem;
`;
