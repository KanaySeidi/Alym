import React, { useState } from "react";
import ft from "./Footer.module.css";
import logo from "../../img/logo.svg";
import telegram from "../../img/telegram.png";
import instagram from "../../img/instagram.png";
import whatsapp from "../../img/whatsapp.png";
import call from "../../img/phone-call.png";
import gmail from "../../img/gmail.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [tel, setTel] = useState(false);
  const [mail, setMail] = useState(false);
  return (
    <>
      <div className={ft.section}>
        <div className={ft.container}>
          <div className={ft.logoSide}>
            <Link to="/">
              <img className={ft.logo} src={logo} alt="" />
            </Link>
            <div className={ft.contact}>
              <div className={ft.pers}>
                <img
                  onClick={() => setTel((prev) => !prev)}
                  className={ft.contItem}
                  src={call}
                  alt=""
                />
                {tel && <p>+996 778 145 852 </p>}
              </div>
              <div className={ft.pers}>
                <img
                  onClick={() => setMail((prev) => !prev)}
                  className={ft.contItem}
                  src={gmail}
                  alt=""
                />
                {mail && <p>alyma0787@gmail.com</p>}
              </div>
              <div>
                <img
                  onClick={() => window.open("https://t.me/alymkg")}
                  className={ft.contItem}
                  src={telegram}
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    window.open("https://www.instagram.com/alym._kg/")
                  }
                  className={ft.contItem}
                  src={instagram}
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/message/TOLLHWK2C2WXN1?autoload=1&app_absent=0"
                    )
                  }
                  className={ft.contItem}
                  src={whatsapp}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={ft.stage}>
            <ul>
              <Link to="buy">
                <li>Покупка Участка</li>
              </Link>
              <Link to="maket">
                <li>Макеты и Чертежи</li>
              </Link>
              <Link to="wall">
                <li>Фундамент и Стены</li>
              </Link>
              <Link to="roof">
                <li>Крыша Окна Двери</li>
              </Link>
              <Link to="inroom">
                <li>Отделочные работы</li>
              </Link>
            </ul>
          </div>
          <div className={ft.services}>
            <ul>
              <Link to="services6">
                <li>Проектирование Домов</li>
                <li></li>
              </Link>
              <Link to="services3">
                <li>Строительные Работы</li>
              </Link>
              <Link to="services7">
                <li>Кровельные Работы</li>
              </Link>
              <Link to="services1">
                <li>Инженерные Коммуникации</li>
              </Link>
              <Link to="services4">
                <li>Фундамент и Стены</li>
              </Link>
              <Link to="services5">
                <li>Навесы</li>
              </Link>
              <Link to="services2">
                <li>Фасад Дома</li>
              </Link>
              <Link to="services8">
                <li>Строительства Забора</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
