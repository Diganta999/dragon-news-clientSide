import React from 'react';
import swimming from '../../assets/swimming.png';
import classes from '../../assets/class.png';
import playground from '../../assets/playground.png';
import bg from '../../assets/bg.png';

const QZone = () => {
    return (
        <div className='w-full p-2 bg-gray-300 rounded-md'>
            <h1 className='text-xl font-semibold'>Q-Zone</h1>
            <div className='mt-4 '>
                <img className='mx-auto border-2 border-gray-500 border-dashed rounded-md w-[300px]' src={swimming} alt="" />
            </div>
            <div className='mt-4 '>
                <img className='mx-auto border-2 border-gray-500 border-dashed rounded-md w-[300px]' src={classes} alt="" />
            </div>
            <div className='mt-4 '>
                <img className='mx-auto border-2 border-gray-500 border-dashed rounded-md w-[300px]' src={playground} alt="" />
            </div>
            <div className='mt-4 '>
                <img className='w-full' src={bg} alt="" />
            </div>
        </div>
    );
};

export default QZone;