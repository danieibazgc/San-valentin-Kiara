import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          ❤️ Hecho con amor para mi amorcito ❤️
        </p>
        <p className="footer-date">
          San Valentín, 14 de febrero del {new Date().getFullYear()}
        </p>
        <p className="footer-tagline">
          "Cada día a tu lado es mi día favorito"
        </p>
      </div>
    </footer>
  )
}

export default Footer
