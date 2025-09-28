import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav className='flex gap-2'>
             <Link className='bg-amber-700 px-5 py-2 rounded-lg font-semibold text-white  ' to="/">Home</Link>
             <Link className='bg-amber-700 px-5 py-2 rounded-lg font-semibold text-white  ' to="/about">About</Link>
             <Link className='bg-amber-700 px-5 py-2 rounded-lg font-semibold text-white  ' to="/contact">Contact Us</Link>
             <Link className='bg-amber-700 px-5 py-2 rounded-lg font-semibold text-white  ' to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;