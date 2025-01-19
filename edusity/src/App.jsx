import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
         <Title subTitle='Our Scheme' title='What We Provide'/>
         <Programs/>
         <About/>
         <Title subTitle='Gallery' title='Campus Photoes'/>
         <Campus />
         <Title subTitle='TESTIMONIALS' title='What students Says'/>
      </div>
      
  </div>
  )
}

export default App
