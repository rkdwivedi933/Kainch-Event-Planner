import OpenMicDualSections from '@/app/components/openmic/OpenMicDualSections'
import OpenMicHero from '@/app/components/openmic/OpenMicHero'
import OpenMicServicesSection from '@/app/components/openmic/OpenMicServicesSection'
import React from 'react'

function OpenMicPage() {
  return (
    <div>
      <OpenMicHero/>
      <OpenMicDualSections/>
      <OpenMicServicesSection/>
    </div>
  )
}

export default OpenMicPage