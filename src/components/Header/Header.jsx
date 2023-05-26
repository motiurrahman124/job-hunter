import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Statistics',
            path: '/statistics'
        },
        {
            id: 3,
            name: 'Applied Jobs',
            path: '/applied-job'
        },
        {
            id: 4,
            name: 'Blog',
            path: '/blog'
        },
    ]
    const [open, setOpen] = useState(false);

  
    return (
        <nav className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF] md:px-0 px-2'>
            <header className="md:flex items-center justify-between py-12 max-w-[1320px] mx-auto">
                <div className="flex-shrink-0">
                    <h1 className="text-[32px] font-extrabold text-[#1A1919]">Job Hunter</h1>
                </div>
                <div onClick={()=>setOpen(!open)} className='md:hidden'>
                    <GiHamburgerMenu className='h-8 w-8 text-[#7E90FE]'/>
                </div>
                <div className="flex-grow mt-2 sm:mt-0 sm:flex sm:justify-center sm:items-center">
                    <ul
                    className={`md:flex gap-6 ${ open ? 'hidden': 'block'} duration-500`}
                    >
                        {
                            routes.map(route =><Link key={route.id} to={route.path}> <li className="hover:text-[#7E90FE]">{route.name}</li></Link>)
                        }
                    </ul>
                </div>
                <div className='md:mt-0 mt-2'>
                    <button className='md:px-7 px-5 md:py-5 py-3 bg-[#7E90FE] rounded-lg font-extrabold text-white'>Start Applying</button>
                </div>
            </header>
        </nav>
    );
};

export default Header;