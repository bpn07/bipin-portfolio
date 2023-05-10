import React from 'react'
import HeroLeft from '../components/HeroLeft'
import HeroRight from '../components/HeroRight'

const Hero = () => {
  return (
    <div className="container flex justify-center gap-20">
        <HeroRight />
        <HeroLeft />
    </div>
  )
}

export default Hero