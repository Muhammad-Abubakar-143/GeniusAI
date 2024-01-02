'use client'
import LandingFooter from '@/components/LandingFooter'
import LandingHero from '@/components/LandingHero'
import LandingNavbar from '@/components/LandingNavbar'
import LandingSection from '@/components/LandingSection'
import LandingSectionSecond from '@/components/LandingSectionSecond'
import LandingSectionThree from '@/components/LandingSectionThree'
import { getCurrentUser } from '@/lib/session'
import { ChevronDown } from 'lucide-react'

import React from 'react'

export default async function page() {
  
  const user = await getCurrentUser();
  return (

    <main>
        <section className="mx-auto h-screen max-w-screen-xl ">
          <LandingNavbar user={user} />
          <LandingHero user={user} />
          <ChevronDown className=" m-auto animate-[fade-in_1.5s_ease-out,bounce_1s_infinite_2s] text-white" />
        </section>
        <section className="mx-auto h-screen w-full bg-white">
          <LandingSection />
        </section>
        <section className="mx-auto h-screen w-full bg-white">
          <LandingSectionSecond />
        </section>
        <div className="h-60 bg-white lg:hidden"></div>
        <section className="mx-auto h-screen w-full bg-white">
          <LandingSectionThree />
        </section>
        <div className="h-64 bg-white md:h-96 lg:hidden"></div>
        <section className="mx-auto mt-6 max-w-screen-xl">
          <LandingFooter />
        </section>
  
      </main>
  )
}
