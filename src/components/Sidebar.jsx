import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'

const Sidebar = () => {

    return (
        <div className='sm:w-1/12  sm:text-3xl text-xl pb-20 sm-pb-0'>
        <div className='fixed sm:h-full w-full sm:w-0 flex sm:flex-col sm:justify-center items-center bg-neutral-700 p-3 gap-10 sm:p-6 z-30' >
            <FaUserAlt className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'/>
            <BsFillBriefcaseFill className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'/>
        </div>
        </div>
    )
}

export default Sidebar