import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Navbar/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;