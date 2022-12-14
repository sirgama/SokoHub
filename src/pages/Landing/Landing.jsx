import React from 'react'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import HeroLanding from './components/HeroLanding'
import HeroNav from './components/HeroNav'
import Info from './components/Info'
import NavbarLanding from './components/NavbarLanding'
import Services from './components/Services'

export default function Landing() {
  return (
    <div>
      <HeroNav />
      <HeroLanding />
      {/* <About />
      <Services />
      <CTA /> */}
      <Footer />
    </div>
  )
}
