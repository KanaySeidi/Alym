import React from "react";
import { useNavigate } from "react-router-dom";
import naves from "./NavesSer.module.css";
import naves1 from "../../../img/naves1.jpg";

const NavesSer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={naves.section}>
        <div className={naves.header}>
          <img src={naves1} alt="" />
          <div className={naves.headerBtn}>
            <button onClick={() => navigate(-1)}>Назад</button>
          </div>
        </div>
        <div className={naves.container}>
          <h1>Строительство навесов</h1>
          <p>
            Функциональным и удобным сооружением, которое устанавливают на
            многих территориях частных домов, является навес для автомобиля. Он
            обеспечивает его защиту от атмосферных и механических воздействий, и
            также может использоваться для других целей. Конструкция обладает
            высокой прочностью, длительным эксплуатационным сроком и аккуратным,
            эстетичным внешним видом. Ее строительство я предлагаю заказать при
            звонке в офис (контактные данные указаны в соответствующем разделе
            на сайте). Вы можете ознакомиться с ценами и всей необходимой
            информацией, а вопросы относительно услуг уточнить в телефонном
            режиме.
          </p>
        </div>
      </div>
    </>
  );
};

export default NavesSer;
