import React from "react";
import pr from "./Projects.module.css";
import pic1 from "../../img/1.jpeg";
import pic2 from "../../img/2.jpeg";
import pic3 from "../../img/3.jpeg";
import pic4 from "../../img/4.jpeg";

const Projects = () => {
  return (
    <>
      <div className={pr.section}>
        <div className={pr.container} id="project">
          <div className={pr.downline}></div>

          <h2>Услуги</h2>

          {/* <div className={pr.list}>
            <div className={pr.item}>
              <img src={pic1} alt="" />
            </div>
            <div className={pr.item}>
              <img src={pic2} alt="" />
            </div>
            <div className={pr.item}>
              <img src={pic3} alt="" />
            </div>
            <div className={pr.item}>
              <img src={pic4} alt="" />
            </div>
          </div> */}

          <div>
            1 Дом Коттедж под ключ 2 Металло-конструкция любой сложности 3
            Обделечные услуги 4 Электро монтаж и техника
          </div>
        </div>
        <div className={pr.downline}></div>
      </div>
    </>
  );
};

export default Projects;
