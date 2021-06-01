import React from 'react';
import { useCountRenders } from './useCountRenders';

export const Square = React.memo(({ n, onClick }) => {
  useCountRenders();
  return <button onClick={() => {onClick(n)}}>increment {n}</button>
})
