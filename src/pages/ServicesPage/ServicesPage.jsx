import React from "react";
import { Link } from "react-router-dom";
import ser from "./ServicesPage.module.css";
import bricks from "../../img/projectSer.jpg";
import bg1 from "../../img/bg1.jpg";

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
                  <button>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={bricks} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Проектирование Домов</h2>
                <Link to="services6">
                  <button>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={bricks} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Проектирование Домов</h2>
                <Link to="services6">
                  <button>Узнать больше</button>
                </Link>
              </div>
            </div>
            <div className={ser.card}>
              <img className={ser.cardImg} src={bricks} alt="" />
              <div className={ser.item}>
                <h2 className={ser.itemText}>Проектирование Домов</h2>
                <Link to="services6">
                  <button>Узнать больше</button>
                </Link>
              </div>
            </div>
            {/* <Link to="services3">
            <div>Ремонт Домов</div>
          </Link>
          <Link to="services7">
            <div>Кровельные работы</div>
          </Link>
          <Link to="services4">
            <div>Строительство Фундамента</div>
          </Link>
          <Link to="services1">
            <div>Инженерные Коммуникации</div>
          </Link>
          <Link to="services5">
            <div>Строительство Навесов</div>
          </Link>
          <Link to="services2">
            <div>Фасад Домов</div>
          </Link>
          <Link to="services8">
            <div>Строительство Заборов</div>
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
