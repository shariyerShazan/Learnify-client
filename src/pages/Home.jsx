import CTASection from '@/components/shared/extra/CTASection'
import FeaturesSection from '@/components/shared/extra/FeaturesSection'
import HeroSection from '@/components/shared/extra/HeroSection'
import TestimonialSection from '@/components/shared/extra/TestimonialSection'
import Courses from '@/pages/Courses'
import React from 'react'

const Home = () => {
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
