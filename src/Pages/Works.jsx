import React from 'react'
import TechTemple from '../images/Techtemple.png'
import DoctorStoryNepal from '../images/DoctorStoryNepal.png'

const Works = () => {
  return (
    <div className='sm:w-10/12 m-auto text-center flex flex-col justify-center items-center'>
      <div className='pt-20 sm:pt-10 md:text-5xl text-3xl'><p className=''>Featured Projects</p></div>
      <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between pb-20 sm:gap-10'>
        <div className='lg:pt-40 md:pt-20  pt-10 lg:w-96 w-72 m-auto'>
          <img src={TechTemple} alt="" className='rounded-2xl object-cover' />
        </div>
        <div className='lg:pt-52 md:pt-40 sm:pt-10 pt-10 lg:w-96 w-72 m-auto'>
          <img src={DoctorStoryNepal} alt="" className='rounded-2xl object-cover' />
        </div>
      </div>

      <div className='pt-20 sm:pt-10 md:text-5xl text-3xl'><p>My Projects</p></div>
      <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between pb-20 sm:gap-10'>
        <div className='lg:pt-40 md:pt-20  pt-10 lg:w-96 w-72 m-auto'>
          <img src={TechTemple} alt="" className='rounded-2xl object-cover' />
        </div>
        <div className='lg:pt-52 md:pt-40 sm:pt-10 pt-10 lg:w-96 w-72 m-auto'>
          <img src={DoctorStoryNepal} alt="" className='rounded-2xl object-cover' />
        </div>
      </div>

    </div>
  )
}

export default Works