import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {Outlet} from "react-router-dom";
import Nav from "../../components/Nav";

const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;