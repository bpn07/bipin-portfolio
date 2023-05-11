import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const HeroRight = () => {


    return (
        <div className='text-center sm:text-left text-2xl z-10'>
            <div className='font-medium tracking-widest  pb-10 '>
                <p className='sm:text-3xl lg:text-4xl'>Hello!</p>
                <p className='sm:text-4xl lg:text-5xl'>I'm <span className='sm:text-5xl lg:text-7xl'>Jr. Frontend</span></p>
                <p className='sm:text-5xl lg:text-7xl'>Developer</p>
            </div>
            <div className='flex sm:flex-col gap-5 justify-center sm:text-4xl'>
                <BsGithub className='hover:text-neutral-400 cursor-pointer active:text-neutral-400' />
                <BsLinkedin className='hover:text-neutral-400 cursor-pointer active:text-neutral-400' />
                <ImMail4 className='hover:text-neutral-400 cursor-pointer active:text-neutral-400' />
            </div>
        </div>
    )
}

export default HeroRight