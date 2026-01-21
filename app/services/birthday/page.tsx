import BirthdayAbout from '@/app/components/birthday/BirthdayAbout'
import BirthdayHero from '@/app/components/birthday/BirthdayHero'
import BirthdaySection from '@/app/components/birthday/BirthdaySection'
import React from 'react'

function BirthdayPage() {
  return (
    <div>
      <BirthdayHero/>
      <BirthdayAbout/>
      <BirthdaySection/>
    </div>
  )
}

export default BirthdayPage
