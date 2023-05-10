import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const HeroRight = () => {


    return (
        <div className='flex flex-col gap-20  mt-40'>
            <div className='font-medium tracking-widest '>
                <p className='text-4xl'>Hello!</p>
                <p className='text-5xl'>I'm <span className='text-7xl'>Jr. Frontend</span></p>
                <p className='text-7xl'>Developer</p>
            </div>
            <div className='text-4xl flex flex-col gap-4'>
                <BsGithub className='hover:text-neutral-400 cursor-pointer active:text-neutral-400' />
                <BsLinkedin className='hover:text-neutral-400 cursor-pointer active:text-neutral-400' />
                <ImMail4 className='hover:text-neutral-400 cursor-pointer active:text-neutral-400' />
            </div>
        </div>
    )
}

export default HeroRight