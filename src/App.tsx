import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Voucher from './pages/Voucher';
import Support from './pages/Support';
import About from './pages/About';

import MouseStalker from './components/MouseStalker';
import {useRef} from 'react';
// import Loading from './pages/Loading';
import styled from 'styled-components';

function App() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <Section>
      {/* <Loading /> */}
      <AppSection ref={sectionRef}>
        <MouseStalker containerRef={sectionRef} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppSection>
    </Section>
  );
}

export default App;

const Section = styled.section`
  height: 100vh;
`;

const AppSection = styled.section`
  height: 100vh;
`;
