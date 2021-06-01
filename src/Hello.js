import React, { useRef, useState } from 'react'
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

export const Hello = () => {
  const [count, setCount] = useState(0)
  const { loading, data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const divRef = useRef()
  const rect = useMeasure(divRef, data)
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{ loading ? 'loading..' : data }</div>
      </div>
      <div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
      </div>      <button disabled={loading} onClick={() => setCount(x => x + 1)}>+</button>
    </div>

  );
}
