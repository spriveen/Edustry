import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We provide quality education to build a better world.</h1>
        <p>Our mission is to deliver exceptional education that empowers individuals and transforms communities, paving the way for a brighter and more prosperous world.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
        

      </div>
    </div>
  )
}

export default Hero
