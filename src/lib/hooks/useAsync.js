import { useState, useEffect, useCallback } from 'react'

export function useAsync (asyncFunction, inmediate) {
  const [status, setStatus] = useState('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(() => {
    setStatus('pending')
    setValue(null)
    setError(null)

    return asyncFunction()
      .then(res => {
        setValue(res)
        setStatus('success')
      })
      .catch(e => {
        setError(e)
        setStatus('error')
      })
  },
  [asyncFunction]
  )

  useEffect(() => {
    if (inmediate) {
      execute()
    }
  }, [execute, inmediate])

  return { execute, status, value, error }
}
