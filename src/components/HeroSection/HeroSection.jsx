import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <main className="hero">
    <video autoPlay loop muted playsInline className="video-background">
      <source src='./images/hero.mp4' type="video/mp4" />
    </video>
  </main>
  )
}

export default HeroSection