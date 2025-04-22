import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterLine } from 'react-icons/ri';
import { RxInstagramLogo } from 'react-icons/rx';

const Social = () => {
    return (
        <div>
            <div className='flex flex-col '>
                <div>
                <button className='py-[17px] px-[17px] border font-medium gap-x-2 flex justify-start items-center w-full rounded-sm'><FaFacebookF className='p-2 text-3xl text-blue-700 rounded-full bg-slate-300 ' />Facebook</button>
                </div>
                <div>
                <button className='py-[17px] px-[17px] border font-medium gap-x-2 flex justify-start items-center w-full'><RiTwitterLine  className='p-2 text-3xl rounded-full text-sky-600 bg-slate-400' />Twitter</button>
                </div>
                <div>
                <button className='py-[17px] px-[17px] border font-medium gap-x-2 flex justify-start items-center w-full rounded-sm'><RxInstagramLogo className='p-2 text-3xl text-orange-700 rounded-full bg-slate-400' />Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Social;