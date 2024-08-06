/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar, Hero, Footer, Explore, Advertise, Pricings, Banner, Newslatter } from './components/'
import { bannerAPI, brands, footerAPI, hero, memory, navlinks, placesAPI, pricingapi } from './data/travigoda'
import Memory from './components/Memory'

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
      <Footer footerAPI={footerAPI} />
    </div>
  )
}

export default App