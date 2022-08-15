import Mobile from './Mobile';

import analysis from '../../assets/images/portfolio_management/analysis.png';
import technicals from '../../assets/images/portfolio_management/technicals.png';
import economic from '../../assets/images/portfolio_management/economic.png';
import portfolio from '../../assets/images/portfolio_management/portfolio.png';
import { useState } from 'react';

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const card_items = [
    {
      id: 'textAnalysis',
      title: 'Text Analysis',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.

    Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: analysis,
    },
    {
      id: 'technicals',
      title: 'Technicals',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.

    Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: technicals,
    },
    {
      id: 'economicOutlook',
      title: 'Economic Outlook',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.

    Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: economic,
    },
    {
      id: 'portfolioManagement',
      title: 'Portfolio Management',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.

    Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: portfolio,
    },
  ];
  return (
    <>
      <Mobile card_items={card_items} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  );
};

export default Home;
