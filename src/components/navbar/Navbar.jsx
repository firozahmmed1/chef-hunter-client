import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className="navbar bg-red-20">
                <div className="">
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500 '>EatingWell</span></Link>
                </div>
                <div className="flex">
                    <div className="menu menu-horizontal flex-1 px-1 gap-x-2">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                     <Link to="/login">Login</Link>
                </div>
            </div>
    );
};

export default Navbar;