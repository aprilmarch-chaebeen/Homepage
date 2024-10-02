import HomeFooter from '../components/Home/HomeFooter';
import PortfolioMain from '../components/Portfolio/PortfolioMain';
import PortfolioProjects from '../components/Portfolio/PortfolioProjects';

function Portfolio() {
  return (
    <section>
      <PortfolioMain />
      <PortfolioProjects />
      <HomeFooter />
    </section>
  );
}

export default Portfolio;
