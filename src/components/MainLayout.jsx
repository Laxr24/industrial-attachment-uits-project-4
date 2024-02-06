import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'

const MainLayout = () => {
    // const font = `
    //     .fontFamily{
    //         font-family: 'Playfair Display', serif;
    //     }
    // `
    return (
        <div style={{font_family: 'Playfair Display'}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;