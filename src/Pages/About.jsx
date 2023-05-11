import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const About = () => {
    return (

        <div className=' text-center px-10 lg:px-20 sm:w-8/12 m-auto'>
            <h1 className='text-4xl sm:text-5xl md:text-8xl pb-20'>About Me</h1>
            <h5 className='text-2xl sm:text-4xl pb-3'>Hello!</h5>
            <p className='text-3xl md:text-5xl pb-3'>I am Bipin Pathak</p>
            <p className='text-xl md:text-2xl pb-10'>An undergraduate Jr. Frontend Developer based on Nepal.</p>
            <p className='text-lg md:text-xl pb-10'>I have demonstrated an impressive skills and experience in various areas of web development.
                My expertise in graphics design, JavaScript, React JS, and CSS frameworks has enabled you to create innovative and visually appealing websites and web applications.
            </p>

            <p className='sm:text-xl pb-5'>Connect With Me</p>
            <div className='flex gap-5 justify-center text-2xl sm:text-4xl pb-10'>
                <Link to='https://github.com/bpn07' target='_blank' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <BsGithub /></Link>
                <Link to='https://www.linkedin.com/in/bipin7' target='_blank' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <BsLinkedin /></Link>
                <Link to='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQBsqTbkZtKWDhbdxfdldKFkJqxmpkpBkBLWSTWNPhhCmwPxxSSBQLhWNkQzgrhgptSV' target='_blank' className='hover:text-neutral-400 cursor-pointer active:text-neutral-400'> <ImMail4 /></Link>

            </div>
        </div>
    )
}

export default About