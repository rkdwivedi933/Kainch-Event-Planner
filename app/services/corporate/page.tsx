import CorporateEventDualSections from '@/app/components/corporateevent/CorporateEventDualSections'
import CorporateEventHero from '@/app/components/corporateevent/CorporateEventHero'
import CorporateEventServicesSection from '@/app/components/corporateevent/CorporateEventServicesSection'
import React from 'react'

function CorporatePage() {
  return (
    <div>
      <CorporateEventHero/>
      <CorporateEventDualSections/>
      <CorporateEventServicesSection/>
    </div>
  )
}

export default CorporatePage