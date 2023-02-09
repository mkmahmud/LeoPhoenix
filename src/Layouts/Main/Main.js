import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import GetStarted from '../../Components/GetStarted/GetStarted';
import Nav from '../../Components/Navbar/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <GetStarted></GetStarted>
            <Footer></Footer>
        </div>
    );
};

export default Main;