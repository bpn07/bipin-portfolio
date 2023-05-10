import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'

const Sidebar = () => {

    return (
        <div className='fixed flex flex-col justify-center items-center bg-neutral-700 bg- h-full w-20 text-3xl gap-10' >
            <FaUserAlt className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'/>
            <BsFillBriefcaseFill className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'/>
        </div>
    )
}

export default Sidebar