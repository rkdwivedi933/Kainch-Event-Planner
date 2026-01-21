import SfxAbout from '@/app/components/sfx/Sfxabout'
import SfxHero from '@/app/components/sfx/SfxHero'
import SfxSection from '@/app/components/sfx/SfxSection'
import React from 'react'


function SfxPage() {
  return (
    <div>
      <SfxHero/>
      <SfxAbout/>
      <SfxSection/>
    </div>
  )
}

export default SfxPage