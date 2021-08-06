import { useState, useEffect } from 'react'

export const useMarkets = ({ coinId }) => {
  const URL_MARKET = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
  const { coins } = useCoins({ url: URL_MARKET })
  return { market: coins }
}

export function useCoins ({ url }) {
  const [coins, setCoins] = useState([])
  const abortController = new window.AbortController()
  const signal = abortController.signal

  useEffect(() => {
    window.fetch(url, { signal })
      .then(res => res.json())
      .then(json => {
        console.log("[JSON]",json)
        const data = json
        
        setCoins(data)
      })
      .catch(e => new Error(e))
    return () => abortController.abort()
  }, [url])

  return { coins }
}

export function postCoin ({ url, body }) {
  const [postCoin, setPostCoin] = useState()

  useEffect(() => {
    window.fetch(url, {
      method: 'POST',
      body
    })
      .then(res => res.json())
      .then(json => setPostCoin(json))
      .catch(e => {
        console.log('post', e)
        throw new Error('Post not valid')
      })
  }, [url])

  return { postCoin }
}
