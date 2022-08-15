import Mobile from './Mobile';

export default () => {
  const data = [
    {
      title: 'Relative to S&P 500 Index',
      items: [
        {
          title: 'Major Asset Classes',
          items: [
            {
              name: 'U.S. Equities',
              status: 'BUY THE DIP',
              uw_ow: 70,
              conviction: 3,
            },
            {
              name: 'U.S. Bonds',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'U.S. Treasuries',
              status: 'BEARISH MOMENTUM',
              uw_ow: 10,
              conviction: -3,
            },
            {
              name: 'U.S. Dollars',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'Commodities',
              status: 'BULLISH MOMENTUM',
              uw_ow: 90,
              conviction: 3,
            },
          ],
        },
        {
          title: 'Cap/ Style',
          items: [
            {
              name: 'U.S. Bonds',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'U.S. Treasuries',
              status: 'BEARISH MOMENTUM',
              uw_ow: 10,
              conviction: -3,
            },
            {
              name: 'U.S. Dollars',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'Commodities',
              status: 'BULLISH MOMENTUM',
              uw_ow: 90,
              conviction: 3,
            },
          ],
        },
        {
          title: 'International',
          items: [
            {
              name: 'U.S. Bonds',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'U.S. Treasuries',
              status: 'BEARISH MOMENTUM',
              uw_ow: 10,
              conviction: -3,
            },
            {
              name: 'U.S. Dollars',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
          ],
        },
        {
          title: 'Growth Equity Sectors',
          items: [
            {
              name: 'U.S. Bonds',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'U.S. Treasuries',
              status: 'BEARISH MOMENTUM',
              uw_ow: 10,
              conviction: -3,
            },
          ],
        },
        {
          title: 'Value Equity Sectors',
          items: [
            {
              name: 'U.S. Bonds',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'U.S. Treasuries',
              status: 'BEARISH MOMENTUM',
              uw_ow: 10,
              conviction: -3,
            },
          ],
        },
      ],
    },
    {
      title: 'Relative to US Aggregate Bond Index',
      items: [
        {
          title: 'Fixed Income Asset Classes',
          items: [
            {
              name: 'Municipal Bonds',
              status: 'BUY THE DIP',
              uw_ow: 80,
              conviction: 3,
            },
            {
              name: 'High Yield Bonds',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'Investment Grade',
              status: 'BEARISH MOMENTUM',
              uw_ow: 10,
              conviction: -3,
            },
            {
              name: 'TIPS',
              status: 'SELL INTO STRENGTH',
              uw_ow: 50,
              conviction: -2,
            },
            {
              name: 'Emerging Market Debt',
              status: 'BULLISH MOMENTUM',
              uw_ow: 80,
              conviction: 3,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Mobile data={data} />
    </>
  );
};
