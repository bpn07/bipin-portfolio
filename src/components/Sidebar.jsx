import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <div className='flex justify-between sm:text-3xl text-xl pb-20 sm-pb-0'>
            <div className='fixed sm:h-full w-full sm:w-0 flex sm:flex-col  sm:justify-center sm:items-center bg-neutral-700 p-3 gap-5 md:gap-10 sm:p-6 z-30' >
           <Link to='/' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <AiFillHome  /></Link>
           <Link to='/work' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <BsFillBriefcaseFill  /></Link>
           <Link to='/about' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <FaUserAlt  /></Link>

            </div>
        </div>
    )
}

export default Sidebar