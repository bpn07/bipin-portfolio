import React from 'react';
import Profile from '../images/Profile.png';

const HeroLeft = () => {
    return (
        <div>
            <div className='box w-72 h-72 lg:w-96 lg:h-96 -rotate-45 overflow-hidden relative'>
                <img src={Profile} alt="" className='rotate-45 absolute -bottom-8 right-8' />
            </div>
        </div>
    )
}

export default HeroLeft;