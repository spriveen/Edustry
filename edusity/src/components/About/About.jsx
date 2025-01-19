import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon'/>
        </div>
         <div className='about-right'>
         <h3>About University</h3>
         <h2>We Are The Best University In The Country</h2>
         <p>Our university has a long-standing reputation for excellence in education, research, and innovation. With state-of-the-art facilities
         and a dedicated faculty, we provide students with a supportive and challenging environment to grow academically and personally. 
         We take pride in offering a wide range of programs designed to equip students with the skills and knowledge needed to excel in 
         their chosen fields.</p>

      <p>Recognized as a leader in higher education, we emphasize a holistic approach to learning that goes beyond academics. From vibrant campus 
        life to cutting-edge research opportunities, we prepare our students to become global leaders and problem solvers. Join us to experience an unparalleled
         educational journey at the best university in the country.</p>

        </div>
        
      
    </div>
  )
}

export default About
