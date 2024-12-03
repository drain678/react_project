import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/header/header"; 
import { useSelector } from "react-redux";

import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import AppPage from "../../const";

const MainLayout = () => {
    const user = useSelector((state) => state.user);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ paddingTop: '100px', flex: 1 }}>
                <hr />
                <Outlet />
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-line"></div>
                    {!user.isAuthenticated ? (
                        <>
                        <div className="header-group left">
                            <span className="footer-text"></span>
                            <NavLink to={AppPage.main} className="header-button">
                                <Button label="Главная страница" />
                            </NavLink>
                        </div>
                        <span className="footer-text">2024 Компания "OZON"</span>
                        </>
                        
                    ) : (
                        <>
                        <div className="header-group left">
                            <span className="footer-text"></span>
                            <NavLink to={AppPage.main} className="header-button">
                                <Button label="Главная страница" />
                            </NavLink>
                            <NavLink to={AppPage.services} className="header-button">
                                    <Button label="Услуги компании" />
                                </NavLink>
                        </div>
                                <span className="footer-text">2024 Компания "OZON"</span>
                        </>
                    )}
                </div>
            </footer>

        </div>
    );
};

export default MainLayout;