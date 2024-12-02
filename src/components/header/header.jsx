import React from "react"
import { Button } from "@consta/uikit/Button"
import { User } from "@consta/uikit/User"
import { useNavigate } from "react-router-dom"
import { AppRoute } from '../../const'
import { Layout } from "@consta/uikit/Layout"
import Menu from '../menu/Menu'

const Header = () => {
    const navigate = useNavigate();
    return (
        <header style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "sticky",
            top: 0,
            paddingBottom: "20px",
        }}>
            <Layout>
                <Menu />
                <User />
                <Button label="Вход" onClick={() => navigate(AppRoute.login)} />
            </Layout>
        </header>
    )
}

export default Header;