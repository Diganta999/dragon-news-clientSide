import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubLogin = () => {
    return (
        <div>
            <button className='flex items-center justify-center w-full py-2 border rounded-md gap-x-2'><FaGithub className='text-xl' /> Login With Google</button>
        </div>
    );
};

export default GitHubLogin;