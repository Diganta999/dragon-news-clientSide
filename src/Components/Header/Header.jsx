import React from 'react';
import logo from "../../assets/logo.png";
import { format } from 'date-fns';
import Latest from '../LatestNews/Latest';

const Header = () => {
    const now = new Date();
    return (
        <div className='flex items-center justify-center'>
            <div>
                <div>
                    <img className='w-[471px] h-[60px] mx-auto' src={logo} alt="Logo" />
                </div>
                <div className='text-center'>
                    <h1 className='text-[#706F6F] mt-5'>Journalism Without Fear or Favour</h1>
                    <p className='text-[#706F6F] mt-2'>
                        Today is {format(new Date(), 'MMMM do, yyyy')}
                    </p>
                </div>
                <div className='mt-8'>
                    <Latest />
                </div>
            </div>
        </div>

    );
};

export default Header;