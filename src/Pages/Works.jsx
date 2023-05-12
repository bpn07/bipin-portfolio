import React from 'react'
import TechTemple from '../images/techtemple.png'
import DoctorStoryNepal from '../images/DoctorStoryNepal.png'

const Works = () => {
  return (
    <div className='sm:w-10/12 m-auto text-center flex flex-col items-center'>
      <div className='pt-20 sm:pt-10 md:text-5xl text-3xl'><p className=''>Featured Projects</p></div>
      <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between pb-20'>
        <div className='lg:pt-40 md:pt-20  pt-10'>
          <img src={TechTemple} alt="" className='project-img rounded-2xl' />
        </div>
        <div className='lg:pt-52 md:pt-40 sm:pt-20 pt-10'>
          <img src={DoctorStoryNepal} alt="" className='project-img rounded-2xl ' />

        </div>
        <div className='lg:pt-52 md:pt-40 sm:pt-20 pt-10'>
          <img src={TechTemple} alt="" className='project-img rounded-2xl' />
        </div>
        <div className='lg:pt-40 md:pt-20 pt-10'>
          <img src={DoctorStoryNepal} alt="" className='project-img rounded-2xl ' />

        </div>
      </div>
      <div className='pt-20 sm:pt-10 md:text-5xl text-3xl'><p>My Projects</p></div>
      <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between pb-20'>
        <div className='lg:pt-40 md:pt-20  pt-10'>
          <img src={TechTemple} alt="" className='project-img rounded-2xl' />
        </div>
        <div className='lg:pt-52 md:pt-40 sm:pt-20 pt-10'>
          <img src={DoctorStoryNepal} alt="" className='project-img rounded-2xl ' />

        </div>
        <div className='lg:pt-52 md:pt-40 sm:pt-20 pt-10'>
          <img src={TechTemple} alt="" className='project-img rounded-2xl' />
        </div>
        <div className='lg:pt-40 md:pt-20 pt-10'>
          <img src={DoctorStoryNepal} alt="" className='project-img rounded-2xl ' />

        </div>
      </div>

    </div>
  )
}

export default Works