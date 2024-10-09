
import React, { useState } from "react"
import './RegisterForm.css'
import { HiArrowCircleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";


const RegisterForm = () => {
    const [selectedOption, setSelectedOption] = useState(''); // для выбора роли
    const [city, setCity] = useState(''); // для поля города
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleCityChange = (event) => {
      setCity(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Выбранная опция:', selectedOption);
      if (selectedOption === 'user') {
        console.log('Город:', city);
      }
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
            <input type="number" placeholder="Номер телефона" required />
          </div>
  
          <div className="input-box">
            <input type="password" placeholder="Пароль" required />
          </div>
  
          <div className="input-box">
            <label htmlFor="role">Выберите Отдел:</label>
            <select id="role" value={selectedOption} onChange={handleChange}>
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