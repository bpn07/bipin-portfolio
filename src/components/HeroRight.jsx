import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const HeroRight = () => {


    return (
        <div className='text-center sm:text-left z-10'>
            <div className='font-medium tracking-widest pb-5  md:pb-10 '>
                <p className='text-md  sm:text-2xl lg:text-4xl'>Hello!</p>
                <p className='text-lg sm:text-3xl lg:text-4xl'>I'm <span className='text-2xl sm:text-4xl lg:text-5xl'>Bipin Pathak</span></p>
                <p className='sm:text-3xl lg:text-4xl'>Jr. Frontend Developer</p>
            </div>
            <div className='flex sm:flex-col gap-5 justify-center text-2xl sm:text-4xl'>
           <Link to='https://github.com/bpn07' target='_blank' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <BsGithub  /></Link>
           <Link to='https://www.linkedin.com/in/bipin7' target='_blank' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <BsLinkedin  /></Link>
           <Link to='https://mail.google.com/mail/u/beepinpathak0721@gmail.com/#compose' target='_blank' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <ImMail4  /></Link>
            </div>
        </div>
    )
}

export default HeroRight