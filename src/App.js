import './App.css';
import { Hello } from './Hello';
import { useCallback, useMemo, useReducer, useState } from 'react';
import { Hi } from './Hi';
import { Square } from './Square';
import { Child } from './Child';
import { useFetch } from './useFetch';
const computeLongestWord = (arr) => {
  if(!arr) {
    return ''
  }
  console.log('computing longest word')
  let longestWord = ''
  JSON.parse(arr).forEach(sentence => {
    sentence.split(" ").forEach(word => {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    })
  })
  return longestWord;
}
const reducer = (state, action) => {

}
function App() {
  const favoriteNums = [7, 21, 37]
  const [showHello, setShowHello] = useState(true)
  const [count, setCount] = useState(0)
  const { data } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json')

  const [num, dispatch] = useReducer(reducer, 0)


  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])
  const increment = useCallback((n) => {
    setCount(x => x + n)
  }, [setCount])
  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() => {dispatch({
          type: 'increment',
          payload: 2
        })}}>increment</button>
        <button onClick={() => {dispatch({
          type: 'decrement',
          payload: 3
        })}}>decrement</button>
      </div>
      { showHello && <Hello />}
      <button onClick={() => setShowHello(x => !x)}>toggle hello</button>
      {/*<Hi increment={increment}/>*/}
      <div>count: {count}</div>
      {favoriteNums.map((n, index) => {
        return <Square n={n} key={`square_${index}`} onClick={increment} />
      })}
      <Child />
      <button onClick={() => setCount(x => x + 1)}>+</button>
      {longestWord}
    </div>
  );
}

export default App;
