import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignInWithPass = () => {
    const { signUp, setUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // First sign in the user
        signUp(email, password)
            .then((result) => {
                // Then update their profile
                return updateUserProfile({ 
                    displayName: name, 
                    photoURL: photo 
                }).then(() => {
                    navigate('/');
                    setUser(result.user); // Update the user state in AuthProvider
                    // The auth state listener in AuthProvider will automatically update the user state
                    console.log('User signed in and profile updated');
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                console.log('Google sign in successful');
            })
            .catch(error => {
                console.error('Google sign in error:', error);
            });
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                console.log('GitHub sign in successful');
            })
            .catch(error => {
                console.error('GitHub sign in error:', error);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="w-full max-w-xl overflow-hidden bg-white shadow-xl rounded-2xl">
                {/* Header */}
                <div className="p-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600">
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="mt-2 text-indigo-100">Sign in to access your account</p>
                </div>

                {/* Form */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full px-3 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label htmlFor="photo" className="block mb-1 text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                id="photo"
                                name="photo"
                                type="url"
                                autoComplete="photo"
                                className="block w-full px-3 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="https://example.com/photo.jpg"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <HiMail className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full py-3 pl-10 pr-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <HiLockClosed className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full py-3 pl-10 pr-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition duration-150 bg-indigo-600 border border-transparent rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/* Social Sign-In */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 text-gray-500 bg-white">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <button 
                                type="button" 
                                onClick={handleGoogleSignIn}
                                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FaGoogle className="w-5 h-5 text-red-500" />
                            </button>
                            <button 
                                type="button" 
                                onClick={handleGithubSignIn}
                                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FaGithub className="w-5 h-5 text-gray-800" />
                            </button>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInWithPass;