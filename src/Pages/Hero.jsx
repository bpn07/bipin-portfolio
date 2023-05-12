import React from 'react'
import HeroLeft from '../components/HeroLeft'
import HeroRight from '../components/HeroRight'

const Hero = () => {
  return (
    <div className=" sm:w-9/12 m-auto flex flex-col gap-32 sm:gap-20 sm:flex-row justify-center items-center px-12 sm:px-0 sm:justify-between sm:pt-40 pt-20 sm:pb-44 pb-14" >
        <HeroRight />
        <HeroLeft />
    </div>
  )
}

export default Hero