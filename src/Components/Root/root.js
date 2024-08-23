import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import { Outlet } from 'react-router-dom';


export default function Root({}) {




    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}