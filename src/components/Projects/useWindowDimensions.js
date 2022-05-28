import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 1920,
    height: 1080,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
