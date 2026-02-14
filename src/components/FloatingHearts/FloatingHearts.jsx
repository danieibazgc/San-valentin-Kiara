import React, { useEffect, useState } from 'react'
import './FloatingHearts.css'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 2,
      }
      
      setHearts(prev => [...prev, newHeart])

      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, (newHeart.animationDuration + newHeart.delay) * 1000)
    }

    const interval = setInterval(createHeart, 800)
    
    // Crear algunos corazones iniciales
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 200)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts
