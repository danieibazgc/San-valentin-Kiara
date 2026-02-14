import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: '/images/love 1.jpeg', alt: 'Momento especial 1' },
    { id: 2, src: '/images/love 2.jpeg', alt: 'Momento especial 2' },
    { id: 3, src: '/images/love 3.jpeg', alt: 'Momento especial 3' },
    { id: 4, src: '/images/love 4.jpeg', alt: 'Momento especial 4' },
    { id: 5, src: '/images/love 5.jpeg', alt: 'Momento especial 5' },
    { id: 6, src: '/images/love 6.jpeg', alt: 'Momento especial 6' },
    { id: 7, src: '/images/love 7.jpeg', alt: 'Momento especial 7' },
    { id: 8, src: '/images/love 8.jpeg', alt: 'Momento especial 8' },
    { id: 9, src: '/images/love 9.jpeg', alt: 'Momento especial 9' },
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
