import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const navLinkActive =({isActive})=>{
         return{
            color: isActive ? 'green' : ''
         }
    }
    const handleLogout =()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                        <Link to="/">Home</Link>
                        <Link to ="/blog">Blog</Link>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-pink-600">EatingWell</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <NavLink style={navLinkActive} to="/" className='font-medium text-xl pr-4'>Home</NavLink>
                <NavLink style={navLinkActive} to ="/blog" className='font-medium text-xl pr-4'>Blog</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                
                { !user ? <NavLink style={navLinkActive} to="/login" className='font-medium text-xl pr-4'>Login</NavLink>:
                <NavLink onClick={handleLogout} style={navLinkActive} className='font-medium text-xl pr-4'>Logout</NavLink>}
            </div>
        </div>
    );
};

export default Navbar;