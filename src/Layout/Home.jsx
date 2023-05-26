import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-manrope'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;