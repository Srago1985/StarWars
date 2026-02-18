import { useEffect, useState } from "react"

const useRandomListItem = ({ activeSection, targetSection, reloadKey, url, errorMessage }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (activeSection !== targetSection) {
      return undefined
    }

    let isMounted = true

    const loadRandomItem = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to load list')
        }
        const items = await response.json()
        if (!Array.isArray(items) || items.length === 0) {
          throw new Error('No items available')
        }
        const randomItem = items[Math.floor(Math.random() * items.length)]
        if (isMounted) {
          setData(randomItem)
        }
      } catch (err) {
        console.error(err)
        if (isMounted) {
          setError(errorMessage)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadRandomItem()

    return () => {
      isMounted = false
    }
  }, [activeSection, targetSection, reloadKey, url, errorMessage])

  return { data, loading, error }
}

export default useRandomListItem
