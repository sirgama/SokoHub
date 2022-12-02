import React from 'react'
import About from './components/About'
import HeroLanding from './components/HeroLanding'
import Info from './components/Info'
import NavbarLanding from './components/NavbarLanding'
import Services from './components/Services'

export default function Landing() {
  return (
    <div>
      <NavbarLanding />
      <HeroLanding />
      <About />
      <Services />
    </div>
  )
}
