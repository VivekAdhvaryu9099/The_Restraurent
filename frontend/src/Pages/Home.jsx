import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Quality from '../components/Quality'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Team from '../components/team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Quality/>
        <Menu/>
        <Services/>
        <Team/>
        <Reservation/>
        <Footer/>
    </>
  )
}

export default Home
