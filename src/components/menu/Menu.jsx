import React from "react";
import { Layout } from "@consta/uikit/Layout"

const Menu = () => {
    return (
        <Layout>
            <NavLink to="/">
                <Button label="Главная страница" />
            </NavLink>
            <NavLink to="/service">
                <Button label="Страница услуг" />
            </NavLink>
        </Layout>
    )
}
export default Menu;