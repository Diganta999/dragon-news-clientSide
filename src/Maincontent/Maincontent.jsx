import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import GoogleLogin from '../SharedItems/SocialLogin/GoogleLogin/GoogleLogin';
import GitHubLogin from '../SharedItems/SocialLogin/GitHubLogin/GitHubLogin';
import Social from '../SharedItems/Socilal/Social';
import QZone from '../Components/Q-Zone/QZone';

const Maincontent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories.json') // ✅ Correct path for public folder
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid w-full grid-cols-12 gap-6 px-6 mt-10">
      {/* Left Sidebar */}
      <div className="col-span-3">
        <h1 className="mb-4 text-xl font-semibold">All Categories</h1>
        <div className="flex flex-col gap-y-2">
          {categories.map(category => (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 font-bold btn'
                  : 'text-[#706F6F] py-6 btn'
              }
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-6">
        <h1 className='mb-4 text-xl font-semibold'>Dragon News Home</h1>
        <Outlet />
        
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">
        <h1 className="mb-4 text-xl font-semibold">Login With</h1>
        {/* Add your login options here */}
        <div className='flex flex-col gap-y-4'>
            <div >
            <GoogleLogin />
            </div>
            <div>
            <GitHubLogin />
            </div>
            {/* find of social media */}
            <div className='mt-6 '>
                <h1 className="mb-4 text-xl font-semibold">Find Us On </h1>
                <Social />
            </div>
            <div className='mt-1 '>
                <QZone />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
