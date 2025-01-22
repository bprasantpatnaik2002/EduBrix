import React from 'react'
import './About.css'
import Desc from './Desc'
import Core from './Core'

function About() {
  return (
    <div className="body-container">
        <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Explore endless possibilities with our user-friendly and innovative solutions.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <Desc/>
      <Core/>

    </div>
  )
}

export default About