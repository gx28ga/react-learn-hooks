import React from 'react';
import { useCountRenders } from './useCountRenders';

export const Hi = React.memo(({ increment }) => {
  useCountRenders()
  return (
    <div>
      <button onClick={increment}>Hi</button>
    </div>
  )
})
