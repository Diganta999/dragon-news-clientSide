import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink className={"text-xs text-[#706F6F] font-semibold"}>Home</NavLink></li>
        <li><NavLink className={"text-xs text-[#706F6F] font-semibold"}>About </NavLink></li>
        <li><NavLink className={"text-xs text-[#706F6F] font-semibold"}>Career</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-x-2 navbar-end mt-9">
                    <div>
                        <img
                            className="h-[41px] w-[41px] border  rounded-full object-cover"
                            // src={user?.data?.profilePicture || "/images/black-shadow-avatar.png"}
                            alt="User Avatar"
                        />
                    </div>
                    <div>
                        <button className='btn bg-[#403F3F]  text-white px-4'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;