import pro from "./ProjectSer.module.css";
import { useNavigate } from "react-router-dom";
import maketDoma from "../../../img/maketDoma.jpg";
import dom from "../../../img/dom1.1.jpg";
import garag from "../../../img/garag1.1.jpg";
import hozpostoi from "../../../img/hozpostroi1.1.jpg";
import dachnyi from "../../../img/dachyi1.1.jpg";
import angar from "../../../img/angar1.1.jpeg";
import store from "../../../img/store1.1.jpg";
import banya from "../../../img/banya1.1.jpg";

const Buy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={pro.section}>
        <div className={pro.header}>
          <img src={maketDoma} alt="" />
          <div className={pro.headerBtn}>
            <button onClick={() => navigate(-1)}>Назад</button>
          </div>
        </div>
        <div className={pro.container}>
          <h1>Проектирование Сооружений</h1>
          <p>
            Проект коттеджа – это своего рода комплексная документация
            (эскизная, архитектурная, строительная, электротехническая,
            дизайнерская, прочая), в которой зафиксированы основные моменты
            строительства здания. В частности, следует учесть прокладку
            внутренних и внешних инженерных сетей, проработать
            инженерно-технические решения, учесть конструкционные и иные
            особенности будущего строения. Помимо всего прочего, возведенный дом
            должен соответствовать санитарно-гигиеническим и многим другим
            стандартам. Документация составляется в строгом соответствии с
            предъявляемыми требованиями, после чего утверждается контролирующими
            органами. Наша компания одинаково успешно занимается разработкой
            проекта и строительством домов под ключ. В связи с этим, мы готовы
            принять участие в реализации как уже готового проекта, так и
            создании индивидуального плана. Последний вариант подойдет клиентам,
            предпочитающим нетипичные и нестандартные решения.
          </p>
          <div className={pro.list}>
            <div className={pro.card}>
              <img src={dom} alt="" />
              <h2>Дома и Коттеджи</h2>
            </div>
            <div className={pro.card}>
              <img src={garag} alt="" />
              <h2>Гаражи</h2>
            </div>
            <div className={pro.card}>
              <img src={hozpostoi} alt="" />
              <h2>Хозпостройки</h2>
            </div>
            <div className={pro.card}>
              <img src={dachnyi} alt="" />
              <h2>Дачные домики</h2>
            </div>
            <div className={pro.card}>
              <img src={angar} alt="" />
              <h2>Ангары</h2>
            </div>
            <div className={pro.card}>
              <img src={store} alt="" />
              <h2>Склады</h2>
            </div>
            <div className={pro.card}>
              <img src={banya} alt="" />
              <h2>Бани</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
