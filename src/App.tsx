import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Voucher from './pages/Voucher';
import Support from './pages/Support';
import About from './pages/About';
import styled from 'styled-components';
import MouseStalker from './components/MouseStalker';
import cursorsrc from './assets/svg/cursor.svg';
import {useRef} from 'react';

function App() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
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
  );
}

export default App;

const AppSection = styled.section`
  height: 100vh;
  cursor: url(${cursorsrc}), pointer;
`;
