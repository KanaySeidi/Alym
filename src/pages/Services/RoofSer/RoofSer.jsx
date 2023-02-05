import React from "react";
import rf from "./RoofSer.module.css";
import montajKrov from "../../../img/montajKrov.png";
import gidroKrov from "../../../img/gidroKrov.png";
import remontKrov from "../../../img/remontKrov.png";
import utepKrov from "../../../img/utepKrov.png";
import stropKrov from "../../../img/stropKrov.png";

const RoofSer = () => {
  return (
    <>
      <div className={rf.section}>
        <div className={rf.container}>
          <div className={rf.list}>
            <div className={rf.item}>
              <img src={montajKrov} alt="" />
              <p>Монтаж Кровли</p>
            </div>
            <div className={rf.item}>
              <img src={gidroKrov} alt="" />
              <p>Гидроизоляция Кровли</p>
            </div>
            <div className={rf.item}>
              <img src={remontKrov} alt="" />
              <p>Ремонт Кровли</p>
            </div>
            <div className={rf.item}>
              <img src={utepKrov} alt="" />
              <p>Утепление Кровли</p>
            </div>
            <div className={rf.item}>
              <img src={stropKrov} alt="" />
              <p>Стропильная система</p>
            </div>
          </div>
          <div className={rf.box}>
            <h2>Кровля</h2>
            <p>
              Кровля – важный конструктивный элемент, который обязан выдерживать
              вес снежных масс зимой, шквал атмосферных осадков и натиск ветра,
              атаки холода и жары круглый год. Массивная конструкция прекрасно
              справится с разрушающими факторами, но будет оказывать
              дополнительную нагрузку на фундамент и выйдет затратной в монтаже
              и уходе. Обустройство крыши требует взвешенного подхода, в чём
              помогут специалисты нашей компании и выполнят кровельные работы,
              расценки на которые у нас самые низкие в регионе. Нашим клиентам
              доступен большой спектр кровельных работ, который охватывает весь
              процесс строительства крыши и её ремонта.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoofSer;
