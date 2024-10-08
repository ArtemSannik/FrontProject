import React from "react";
import './LoginForm.css'

const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Вход</h1>
                <div className="input-box">
                    <input type="number" placeholder="Номер телефона" required />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Пароль" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Запомнить меня</label>
                    <a href="#">Сменить пароль</a>
                </div>

                <button type="submit">Войти</button>

                <div className="register-link">
                    <p><a href="#">Регистрация</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm