import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveStocksAction } from '../../redux/actions/text_sentiment.action';
import Mobile from './Mobile';

export default (props) => {
  const data = useSelector((store) => store?.text_sentiment?.get('data'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      retrieveStocksAction({
        symbol: 'AMZN',
        type: 'stock',
        date_from: '2021-11-9',
        date_to: '2021-11-14',
      })
    );
  }, []);

  console.log('data', data);

  const decimelToPercent = (value) => {
    console.log(value, Math.round(Math.abs(value)).toFixed(2) * 100);
    return (Math.abs(value) * 100).toFixed(2);
  };

  return (
    <>
      <Mobile data={data} decimelToPercent={decimelToPercent} />
    </>
  );
};
