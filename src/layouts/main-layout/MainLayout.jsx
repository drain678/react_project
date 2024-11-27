import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/Menu'

const MainLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;