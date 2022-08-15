import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default (renderChartFn, dependencies) => {
  const ref = useRef();

  useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  return ref;
};
