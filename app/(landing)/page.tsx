import LandingContent from '@/components/LandingContent'
import LandingHero from '@/components/LandingHero'
import LandingNavbar from '@/components/LandingNavbar'

import React from 'react'

const page = () => {
  return (
    <div className="h-full relative z-0">
    <LandingHero />
    <LandingContent />
  </div>
  )
}

export default page