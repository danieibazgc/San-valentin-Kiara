import React from 'react'
import Header from './components/Header/Header'
import Message from './components/Message/Message'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import FloatingHearts from './components/FloatingHearts/FloatingHearts'
import './App.css'

function App() {
  return (
    <div className="app">
      <FloatingHearts />
      <Header />
      <Message />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
