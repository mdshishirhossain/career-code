import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;