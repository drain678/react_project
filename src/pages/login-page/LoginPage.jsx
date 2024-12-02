import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Логин и пароль не могут быть пустыми");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

        if (!emailRegex.test(email)) {
            setError("Введите корректный email");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Пароль должен содержать минимум одну букву и цифру");
            return;
        }

        setError("");
        alert("Вы успешно вошли!");
        // Здесь можно добавить логику для авторизации
    };

    return (
        <div className="login-container">
            <div className="header">
                <button className="nav-button">Главная страница</button>
                <button className="nav-button">Услуги компании</button>
                <button className="profile-button">ФИО</button>
                <button className="login-button">Вход</button>
            </div>
            <div className="login-form-container">
                <div className="login-field">
                    <label>Логин</label>
                    <input
                        type="email"
                        placeholder="Введите логин"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-field">
                    <label>Пароль</label>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="login-error">{error}</div>}
                <button className="form-button" onClick={handleLogin}>
                    Вход
                </button>
            </div>
            <footer>
                <button className="footer-button">Главная страница</button>
                <button className="footer-button">Услуги компании</button>
                <div className="footer-text">© 2024 Моя компания</div>
            </footer>
        </div>
    );
};

export default LoginPage;
