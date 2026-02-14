import React, { useState } from 'react'
import './Gallery.css'
import love1 from '../../../images/love 1.jpeg'
import love2 from '../../../images/love 2.jpeg'
import love3 from '../../../images/love 3.jpeg'
import love4 from '../../../images/love 4.jpeg'
import love5 from '../../../images/love 5.jpeg'
import love6 from '../../../images/love 6.jpeg'
import love7 from '../../../images/love 7.jpeg'
import love8 from '../../../images/love 8.jpeg'
import love9 from '../../../images/love 9.jpeg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: love1, alt: 'Momento especial 1' },
    { id: 2, src: love2, alt: 'Momento especial 2' },
    { id: 3, src: love3, alt: 'Momento especial 3' },
    { id: 4, src: love4, alt: 'Momento especial 4' },
    { id: 5, src: love5, alt: 'Momento especial 5' },
    { id: 6, src: love6, alt: 'Momento especial 6' },
    { id: 7, src: love7, alt: 'Momento especial 7' },
    { id: 8, src: love8, alt: 'Momento especial 8' },
    { id: 9, src: love9, alt: 'Momento especial 9' },
  ]

  return (
    <section className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Nuestros momentos juntos 📸</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-icon">❤️</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="modal-close">&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
