
import React, { useState } from "react"
import './RegisterForm.css'
import { HiArrowCircleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import MaskedInput from "react-text-mask";



const RegisterForm = () => {
    const [selectedOption, setSelectedOption] = useState(''); // для выбора роли
    const [city, setCity] = useState(''); // для поля города
    const [isFocused, setIsFocused] = useState(false); // состояние для фокуса
    const [phoneValue, setPhoneValue] = useState(""); // Если фокус потерялся на поле возвращаем плейс

  
    const handleRoleChange  = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleCityChange = (event) => {
      setCity(event.target.value);
    };

    const handlePhoneChange = (event) => {
      setPhoneValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Выбранная опция:', selectedOption);
      if (selectedOption === 'callcenter') {
        console.log('Город:', city);
      }

    };

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
    

  
    return (

      <div className="wrapper">
        <form onSubmit={handleSubmit}>
        <div className="register-conteiner"> 
        <Link className="array-back" to="./login"><HiArrowCircleLeft /></Link>
          <h1>Регистрация</h1>
        </div>
  
          <div className="input-box">
            <input type="text" placeholder="Имя" required />
          </div>
  
          <div className="input-box">
          <MaskedInput
                    mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    placeholder={isFocused || phoneValue ? "" : "Номер телефона"}
                    guide={false} // отключает автоматическую вставку пробелов
                    id="phone"
                    value={phoneValue}
                    onFocus={handleFocus}
                    onBlur={handleNotFocus}
                    onChange={handlePhoneChange}
                    required
                />
          </div>
  
          <div className="input-box">
            <input type="password" placeholder="Пароль" required />
          </div>
  
          <div className="input-box">
            <label htmlFor="role">Выберите Отдел:</label>
            <select id="role" value={selectedOption} onChange={handleRoleChange}>
              <option value="" disabled>
                Выберите
              </option>
              <option value="it">IT</option>
              <option value="callcenter">Call-Center</option>
              <option value="backoffice">Back-Office</option>
            </select>
          </div>
  
          {selectedOption === 'callcenter' && (
            <div className="input-box">
              <input
                type="text"
                placeholder="Город"
                value={city}
                onChange={handleCityChange}
                required
              />
            </div>
          )}
  
          <button className="btn_registration" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  };
  
  export default RegisterForm;