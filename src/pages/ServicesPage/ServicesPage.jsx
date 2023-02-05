import React from "react";
import { Link } from "react-router-dom";
import ser from "./ServicesPage.module.css";
import bricks from "../../img/projectSer.jpg";
import fasad from "../../img/fasad.jpg";
import zabor from "../../img/zabor.jpg";
import naves from "../../img/naves.jpg";
import engiComm from "../../img/engiComm.jpg";
import fundam from "../../img/fundam.jpg";
import kosRem from "../../img/kosmetRem.jpeg";
import krovRab from "../../img/krovRab.jpeg";

const ServicesPage = () => {
  return (
    <>
      <div className={ser.section}>
        <div className={ser.container}>
          <h2 className={ser.text}>Наши Услуги</h2>
          <div className={ser.list}>
            <div className={ser.card}>
              <img className={ser.cardImg} src={bricks} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Проектирование Домов</h2>
                <Link to="services6">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={kosRem} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Строительные работы</h2>
                <Link to="services3">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={krovRab} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Кровельные Работы</h2>
                <Link to="services7">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={engiComm} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Инженерные Коммуникации</h2>
                <Link to="services1">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={fundam} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Строительство Фундамента</h2>
                <Link to="services4">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={naves} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Строительство Навесов</h2>
                <Link to="services5">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={fasad} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Фасад Домов</h2>
                <Link to="services2">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={zabor} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Строительство Заборов</h2>
                <Link to="services8">
                  <button className={ser.button}>Узнать больше</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
