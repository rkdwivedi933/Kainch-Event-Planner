import LiveConcertDualSections from '@/app/components/liveconcert/LiveConcertDualSections'
import LiveConcertHero from '@/app/components/liveconcert/LiveConcertHero'
import LiveConcertServicesSection from '@/app/components/liveconcert/LiveConcertServicesSection'
import React from 'react'

function LiveConcernPage() {
  return (
    <div>
      <LiveConcertHero/>
      <LiveConcertDualSections/>
      <LiveConcertServicesSection/>
    </div>
  )
}

export default LiveConcernPage
