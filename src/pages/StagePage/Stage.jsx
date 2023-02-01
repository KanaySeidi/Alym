import React from "react";
import stage from "./Stage.module.css";
import maket from "../../img/maket.jpg";
import wall from "../../img/wall.jpeg";
import square from "../../img/square.jpg";
import roof from "../../img/roof.jpg";
import remont from "../../img/remont.jpg";

const Stage = () => {
  return (
    <div>
      <div className={stage.section} id="stage">
        <div className={stage.container}>
          <div className={stage.mainText}>Этапы строительство дома</div>
          <div className={stage.list}>
            <div className={stage.item}>
              <h1 className={stage.itemText}>Покупка Участка</h1>
              <img className={stage.itemImg} src={square} alt="" />
            </div>
            <div className={stage.item}>
              <h1 className={stage.itemText}>Макеты и Чертежи</h1>
              <img className={stage.itemImg} src={maket} alt="" />
            </div>
            <div className={stage.item}>
              <h1 className={stage.itemText}>Фундамент и Стены</h1>
              <img className={stage.itemImg} src={wall} alt="" />
            </div>
            <div className={stage.item}>
              <h1 className={stage.itemText}>Крыша, Окна и Двери</h1>
              <img className={stage.itemImg} src={roof} alt="" />
            </div>
            <div className={stage.item}>
              <h1 className={stage.itemText}>Отделочные Работы</h1>
              <img className={stage.itemImg} src={remont} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
