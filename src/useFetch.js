import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const isCurrent = useRef(true)
  useEffect(() => {
    return () => {
      isCurrent.current = false
    }
  }, [])
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((x) => x.clone().text())
      .then((x) => {
        if (isCurrent.current) {
          setLoading(false)
          setData(x)
        }
      })
  }, [url])
  return { loading, data }
}
