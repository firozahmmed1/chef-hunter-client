import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Header = () => {
    return (
        <div className='lg:container lg:mx-auto'>
          <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Header;