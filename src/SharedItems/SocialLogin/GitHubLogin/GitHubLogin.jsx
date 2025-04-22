import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const GitHubLogin = () => {

    const {githubSignIn,setUser} = useContext(AuthContext);
    const handleGitHubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error('Error signing in with GitHub:', error);
            });
    };
    return (
        <div>
            <button onClick={handleGitHubSignIn} className='flex items-center justify-center w-full py-2 border rounded-md gap-x-2'><FaGithub className='text-xl' /> Login With Google</button>
        </div>
    );
};

export default GitHubLogin;