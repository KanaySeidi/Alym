import React from "react";
import work from "./Work.module.css";
import order from "../../img/order.jpg";
import plan from "../../img/plan.jpg";
import complate from "../../img/complete.jpg";
import builder from "../../img/builder.jpg";
import oplata from "../../img/oplata.jpg";
import house from "../../img/house.jpg";

const Work = () => {
  return (
    <>
      <div className={work.section}>
        <h2 className={work.cont}>Как мы работаем</h2>
        <div className={work.container}>
          <div className={work.list}>
            <div className={work.item}>
              <h3>Заявка</h3>
              <p>
                Вы звоните или оствавляете на сайте свой номер. Мы вас
                консултируем и уточняем все детали.
              </p>
            </div>
            <img className={work.card} src={order} alt="call img" width={100} />
          </div>
          <div className={work.list}>
            <img className={work.card} src={plan} alt="call img" width={100} />
            <div className={work.item}>
              <h3>Встреча</h3>
              <p>
                Выезжаем на объект, обсуждаем орг. моменты. состав. коммерческое
                предложение
              </p>
            </div>
          </div>
          <div className={work.list}>
            <img
              className={work.card}
              src={complate}
              alt="call img"
              width={100}
            />
            <div className={work.item}>
              <h3>Договор</h3>
              <p>Заключаем договор, утверждаем план и вы вносите предоплату</p>
            </div>
          </div>
          <div className={work.list}>
            <div className={work.item}>
              <h3>Строительство</h3>
              <p>
                Приступаем к организации и производству работ согласно
                составленному плану.
              </p>
            </div>
            <img
              className={work.card}
              src={builder}
              alt="call img"
              width={100}
            />
          </div>
          <div className={work.list}>
            <div className={work.item}>
              <h3>Оплата</h3>
              <p>Вы по этапно принимаете и оплачиваете работы.</p>
            </div>
            <img
              className={work.card}
              src={oplata}
              alt="call img"
              width={100}
            />
          </div>
          <div className={work.list}>
            <img className={work.card} src={house} alt="call img" width={100} />
            <div className={work.item}>
              <h3>Готовый объект</h3>
              <p>
                Объект готов к сдаче Вы проверяете и принимаете итоги
                строителства
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
