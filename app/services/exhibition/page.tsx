import ExhibitionDualSections from '@/app/components/exhibition/ExhibitionDualSections'
import ExhibitionHero from '@/app/components/exhibition/ExhibitionHero'
import ExhibitionServicesSection from '@/app/components/exhibition/ExhibitionServicesSection'
import React from 'react'

function ExhibitionPage() {
  return (
    <div>
      <ExhibitionHero/>
      <ExhibitionDualSections/>
      <ExhibitionServicesSection/>
    </div>
  )
}

export default ExhibitionPage