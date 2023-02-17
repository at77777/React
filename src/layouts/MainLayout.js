import React from 'react';
import {SideBar} from "../components/sidebar/Sidebar";
import './MainLayout.styles.css'
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="main-container">
            <SideBar />
            <Outlet />
        </div>
    );
};