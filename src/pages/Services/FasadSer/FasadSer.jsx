import React from "react";
import fasad from "./FasadSer.module.css";
import utepFasad from "../../../img/utepFasad.png";
import montajFasad from "../../../img/montajFasad.png";
import montajFasad1 from "../../../img/montajFasad2.png";

const FasadSer = () => {
  return (
    <>
      <div className={fasad.section}>
        <div className={fasad.container}>
          <div className={fasad.list}>
            <div className={fasad.item}>
              <img src={montajFasad} alt="" />
              <p>Монтаж вентилируемых фасадов</p>
            </div>
            <div className={fasad.item}>
              <img src={montajFasad1} alt="" />
              <p>Монтаж штукатурного фасада</p>
            </div>

            <div className={fasad.item}>
              <img src={utepFasad} alt="" />
              <p>Утепление фасада</p>
            </div>
          </div>
          <div className={fasad.box}>
            <h2>Фасадные работы</h2>
            <p>
              Содержание дома – ответственное занятие! Мы готовы разделить с
              Вами ответственность, и организовали для этого квалифицированную
              поддержку из лучших специалистов, выполняющих на высококлассные
              фасадные работы! Цена на строительные услуги – лучшая в регионе.
              Наша команда состоит из консультантов, дизайнеров и мастеров,
              готовых поправить или полностью преобразить внешний вид Вашего
              дома! Ремонт фасада и регулярное обслуживание продлит срок службы
              всего здания, улучшит свойства Фасадные работы: монтаж
              профиляшумо– и теплоизоляции. Специалисты нашей компании владеют
              техникой реконструкции и реставрации фасада, что вернуло многим
              зданиям их первоначальный вид. После обнаружения повреждений или
              трещин не стоит затягивать! Устранять проблему нужно на корню и
              быстро заказать фасадные ремонтные работы, так как промедление
              грозит большими затратами. Монтаж штукатурного фасада ­­­­ – самые
              востребованные фасадные работы в Москве, так как экономичный
              вариант утепления весьма популярен в малоэтажном и многоэтажном
              строительстве и часто применяется для теплоизоляции отдельных
              квартир, офисов или больших торговых центров. Благодаря
              современным материалам и опыту наших сотрудников в сфере
              утепления, фасадные работы по утеплению и монтажу мокрого фасада
              можно проводить даже при температуре ниже 0 градусов.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FasadSer;
