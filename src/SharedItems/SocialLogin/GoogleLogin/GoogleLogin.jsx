import React from 'react';
import { FcGoogle } from "react-icons/fc";
const GoogleLogin = () => {
    return (
        <div>
            <button className='flex items-center justify-center w-full py-2 border rounded-md gap-x-2'><FcGoogle className='text-xl' /> Login With Google</button>
        </div>
    );
};

export default GoogleLogin;