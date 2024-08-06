import React from 'react'
import Hero from '../components/Homepage/Hero'
import Services from '../components/Homepage/Services'
import Packages from '../components/Homepage/Packages'
import Features from '../components/Homepage/Features'
import Gallery from '../components/Homepage/Gallery'
import Reviews from '../components/Homepage/Reviews'


const Homepage = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <Packages/>
      <Features/>
      <Gallery/>
      <Reviews/>
    </>
  )
}

export default Homepage