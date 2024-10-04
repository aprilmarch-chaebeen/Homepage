import React, {Suspense} from 'react';

const PortfolioMain = React.lazy(() => import('../components/Portfolio/PortfolioMain'));
const PortfolioProjects = React.lazy(() => import('../components/Portfolio/PortfolioProjects'));
const HomeFooter = React.lazy(() => import('../components/Home/HomeFooter'));

function Portfolio() {
  return (
    <section>
      <Suspense>
        <PortfolioMain />
        <PortfolioProjects />
        <HomeFooter />
      </Suspense>
    </section>
  );
}

export default Portfolio;
