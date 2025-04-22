import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const GoogleLogin = () => {
    const { googleSignIn,setUser } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error('Error signing in with Google:', error);
            });
    };
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='flex items-center justify-center w-full py-2 border rounded-md gap-x-2'><FcGoogle className='text-xl' /> Login With Google</button>
        </div>
    );
};

export default GoogleLogin;