import { useState, useEffect } from 'react'

export function useGetCoins ({ url }) {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    window.fetch(url)
      .then(res => res.json())
      .then(json => {
        const { data } = json
        setCoins(data)
      })
      .catch(e => new Error(e))
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
