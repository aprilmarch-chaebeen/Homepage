import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Voucher from './pages/Voucher';
import Support from './pages/Support';
import About from './pages/About';
import styled from 'styled-components';

function App() {
  return (
    <AppSection>
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
`;
