import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Voucher from './pages/Voucher';
import About from './pages/About';
// import Loading from './pages/Loading';
import styled from 'styled-components';
import React, {Suspense, useRef} from 'react';
import MouseStalker from './components/MouseStalker';
// import NewBusiness from './pages/NewBusiness';
// import Public from './pages/Public';
// import ITDashboard from './pages/ITDashboard';

const Home = React.lazy(() => import('./pages/Home'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <AppSection ref={sectionRef}>
      <MouseStalker containerRef={sectionRef} />
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/voucher" element={<Voucher />} />
          {/* <Route path="/newbusiness" element={<NewBusiness />} /> */}
          {/* <Route path="/public" element={<Public />} /> */}
          {/* <Route path="/itdashboard" element={<ITDashboard />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  height: 100vh;
`;
