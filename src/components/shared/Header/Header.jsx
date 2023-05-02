import React from 'react';
import Navbar from '../../navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto'>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Header;