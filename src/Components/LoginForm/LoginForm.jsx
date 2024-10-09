import React, { useState } from "react";
import './LoginForm.css';
import { Link } from "react-router-dom";
import MaskedInput from "react-text-mask";

const LoginForm = () => {

    const [isFocused, setIsFocused] = useState(false); // состояние для фокуса
    const [phoneValue, setPhoneValue] = useState(""); // Если фокус потерялся на поле возвращаем плейс

    const handleFocus = () => {
        if(!phoneValue){
            setPhoneValue("+7 ");
        }
        setIsFocused(true); // Меняем состояние на true при фокусе
    };

    const handleNotFocus = () => {
        if(phoneValue === "+7 "  || phoneValue === ""){
            setPhoneValue("");
        }
        setIsFocused(false); // меняю состояние на false
    };

    const handleChange = (e) => {
        setPhoneValue(e.target.value); // Отслеживаем ввод пользователя

    };

    return(

        <div className="wrapper">
            <form action="">
                <h1>Вход</h1>

                <div className="input-box">
                 <MaskedInput
                    mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    placeholder={isFocused || phoneValue ? "" : "Номер телефона"}
                    guide={false} // отключает автоматическую вставку пробелов
                    id="phone"
                    value={phoneValue}
                    onFocus={handleFocus}
                    onBlur={handleNotFocus}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Пароль" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Запомнить меня</label>
                    {/* <a href="#">Сменить пароль</a> */}
                </div>

                <button type="submit">Войти</button>

                <div className="register-link">
                    <p>
                        <Link to = "./register">Регистрация</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm