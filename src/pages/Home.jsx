import CTASection from '@/components/shared/extra/CTASection'
import FeaturesSection from '@/components/shared/extra/FeaturesSection'
import HeroSection from '@/components/shared/extra/HeroSection'
import TestimonialSection from '@/components/shared/extra/TestimonialSection'
import Courses from '@/pages/Courses'
import React, { useEffect } from 'react'

const Home = () => {

  useEffect(()=>{
    document.title = `Home | Learnify`
  },[])

  return (
    <div>
   
       <Courses />
       <HeroSection />
       <FeaturesSection />
       <TestimonialSection />
       <CTASection />
    </div>
  )
}

export default Home
