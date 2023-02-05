import React from "react";
import wall from "./WallSer.module.css";
import setkaWall from "../../../img/setkaWall.jpg";
import derevoWall from "../../../img/derevoWall.jpg";
import profWall from "../../../img/profWall.jpg";
import peskoWall from "../../../img/peskoWall.jpg";
import kirpichWall from "../../../img/kirpichWall.jpg";
import setkaGiWall from "../../../img/setkaGiWall.jpg";

const WallSer = () => {
  return (
    <div>
      <div className={wall.section}>
        <div className={wall.container}>
          <div className={wall.list}>
            <div className={wall.item}>
              <img src={setkaWall} alt="" />
              <p>Сетка рябица</p>
            </div>
            <div className={wall.item}>
              <img src={derevoWall} alt="" />
              <p>Забор из дерева</p>
            </div>
            <div className={wall.item}>
              <img src={profWall} alt="" />
              <p>Профнастил</p>
            </div>
            <div className={wall.item}>
              <img src={peskoWall} alt="" />
              <p>Пескоблок</p>
            </div>
            <div className={wall.item}>
              <img src={kirpichWall} alt="" />
              <p>Забор из кирпича</p>
            </div>
            <div className={wall.item}>
              <img src={setkaGiWall} alt="" />
              <p>3Д забоо</p>
            </div>
          </div>
          <div className={wall.box}>
            <h2>Строительство Заборов</h2>
            <p>
              Всем нам приходится периодически бывать за городом: на даче, в
              коттеджах у друзей. Мы невольно обращаем внимание на то, как
              выглядят соседские дома, из чего сделаны крыша, кровля, какие
              заборы там установлены. И по возвращении домой, эта информация
              начинает переосмысливаться. Если увиденное действительно
              впечатлило, мы хотим воплотить эту идею в собственном доме. Если
              посмотреть на новые конструкции, то сегодня популярна установка
              забора в Бишкеке из следующих материалов: Сетка-рабица. Это
              классика жанра. Недорогое ограждение, которое пропускает свет на
              участок. Металлоштакетник. Внешне чем-то напоминает классическую
              деревянную ограду, только значительно прочнее и спокойно переносит
              механические нагрузки. Металлопрофиль. Ограда из листового
              материала. Надёжно закрывает вас от соседских взглядов. 3Д-заборы.
              Усовершенствованная модель сетки-рабицы, когда забор кажется
              объёмной формы. Это интересный эстетический эффект.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallSer;
