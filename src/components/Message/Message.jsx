import React from 'react'
import './Message.css'

const Message = () => {
  return (
    <section className="message fade-in">
      <div className="message-container">
        <div className="message-card">
          <h2 className="message-title">Mi pequeña 💕</h2>
          <div className="message-content">
            <p className="message-text">
              Mi hermosa Kiara, han pasado 1 año y 9 meses desde que decidimos 
              emprender este hermoso viaje juntos. Cada día a tu lado es un regalo 
              que atesoro en mi corazón. 
            </p>
            <p className="message-text">
              Eres la razón de mi sonrisa, la luz que ilumina mis días más oscuros, 
              y el amor más puro que he conocido. Contigo he aprendido lo que significa 
              amar de verdad.
            </p>
            <p className="message-text">
              Gracias por cada momento compartido, por cada risa, por cada abrazo, 
              y por hacer de mi vida algo extraordinario. Te amo más de lo que las 
              palabras pueden expresar, y no puedo esperar para seguir creando 
              memorias maravillosas a tu lado.
            </p>
            <p className="message-signature">
              Con todo mi amor,<br />
              Daniel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message
