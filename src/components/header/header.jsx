import React from "react";
import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import AppPage from "../../const";
import "./header.css";
import { Layout } from "@consta/uikit/Layout";
import { useSelector } from "react-redux";


const Header = () => {
    const user = useSelector((state) => state.user);

    return (
        <Layout>
            <div className="header">
                <div className="header-container">
                    {user.isAuthenticated ? (
                        <div className="header-group left">
                        </div>
                    ) : (
                        <div className="header-group left">
                        <h3>Вы не зарегистрированы</h3>
                        </div>
                    )}
                    
                    <div className="header-group right">
                        {!user.isAuthenticated ? (
                            <NavLink to={AppPage.login} className="header-button">
                                <Button label="Вход" />
                            </NavLink>
                        ) : (
                            <NavLink to={`${AppPage.userinfo}${user.id}`} className="header-button">
                                    <Button label={`${user.firstName} ${user.lastName}`} />
                            </NavLink>
                        )}
                    </div>
                </div>
                <hr />
            </div>
        </Layout>
    );
};

export default Header;
