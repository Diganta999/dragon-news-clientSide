import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Maincontent from '../../Maincontent/Maincontent';

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Maincontent />
        </div>
    );
};

export default HomeLayout;