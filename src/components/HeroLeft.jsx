import React from 'react';
import Profile from '../images/Profile.png';

const HeroLeft = () => {
    return (
        <div className='flex justify-center items-center'>
           <div className='box -rotate-45 mt-32'></div>
            <img src={Profile} alt="" className='profile-image fixed mt-72  ' />
        </div>
    )
}

export default HeroLeft;