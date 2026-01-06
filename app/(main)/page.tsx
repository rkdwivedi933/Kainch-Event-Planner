import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CityPresenceCarousel from '../components/home/CityPresenceCarousel'
import Testimonials from '../components/home/Testimonials'
import TeamOrClients from '../components/home/OurClients'
import FAQ from '../components/home/FAQ'
import ServicesPage from '../components/home/ServicesPage'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <CityPresenceCarousel/>
      <ServicesPreview/>
      <ServicesPage/>
      <WhyChooseUs/>
      <Testimonials/>
      <TeamOrClients/>
      <FAQ/>
    </div>
  )
}

export default HomePage