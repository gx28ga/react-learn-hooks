import React from 'react';
export const Child = () => {
  console.log('child render')
  const [count, setCount] = React.useState(0)
  return (
    <div>
      child
      {count}
      <button onClick={() => setCount(x => x+1)}>+</button>
    </div>
  )
}
