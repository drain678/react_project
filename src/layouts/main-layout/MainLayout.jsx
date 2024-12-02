import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Menu from '../../components/menu/Menu'

const MainLayout = () => {
    return (
        <div>
            <Header/ >
            {/* <Menu /> */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;