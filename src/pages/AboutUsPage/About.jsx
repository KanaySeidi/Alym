import React from "react";
import ab from "./About.module.css";
import telegram from "../../img/telegram.png";
import instagram from "../../img/instagram.png";
import whatsapp from "../../img/whatsapp.png";
import call from "../../img/phone-call.png";
import gmail from "../../img/gmail.png";

const About = () => {
  return (
    <>
      <div className={ab.section} id="about">
        <div className={ab.container}>
          <h2>Кто мы?</h2>
          <div className={ab.box}>
            <p className={ab.text}>
              <span className={ab.mainTxt}>ALYM KG</span> - это строительная
              компания, специализирующийся на планировании, дизайне и
              строительстве зданий, сооружений и других физических разработок.
              Наша компания состоит из архитекторов, инженеров и строителей,
              чтобы управлять различными этапами проекта, от концепции и дизайна
              до завершения. Мы работаем над различными проектами, такими как
              жилые дома, коммерческие здания и общественная инфраструктура. Мы
              также предоставляем услуги по управлению проектом, подготовке
              участка и аренде оборудования. Наша компания имеет доказанную
              историю успешно завершенных проектов с высоким качеством, сданных
              в срок и в договоренном бюджете.
            </p>
            <div className={ab.contact}>
              <div>
                <img
                  onClick={() => window.open("+996778145852")}
                  className={ab.contItem}
                  src={call}
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={() => window.open("alyma0787@gmail.com")}
                  className={ab.contItem}
                  src={gmail}
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={() => window.open("https://t.me/alymkg")}
                  className={ab.contItem}
                  src={telegram}
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    window.open("https://www.instagram.com/alym.kg02/")
                  }
                  className={ab.contItem}
                  src={instagram}
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/message/TOLLHWK2C2WXN1?autoload=1&app_absent=0"
                    )
                  }
                  className={ab.contItem}
                  src={whatsapp}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={ab.downline}></div>
        </div>
      </div>
    </>
  );
};

export default About;
