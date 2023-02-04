import React, { useState } from "react";
import ab from "./About.module.css";
import telegram from "../../img/telegram.png";
import instagram from "../../img/instagram.png";
import whatsapp from "../../img/whatsapp.png";
import call from "../../img/phone-call.png";
import gmail from "../../img/gmail.png";
import bg2 from "../../img/bg2.jpg";

const About = () => {
  const [tel, setTel] = useState(false);
  const [mail, setMail] = useState(false);

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
              <div className={ab.pers}>
                <img
                  onClick={() => setTel((prev) => !prev)}
                  className={ab.contItem}
                  src={call}
                  alt=""
                />
                {tel && <p>+996 778 145 852 </p>}
              </div>
              <div className={ab.pers}>
                <img
                  onClick={() => setMail((prev) => !prev)}
                  className={ab.contItem}
                  src={gmail}
                  alt=""
                />
                {mail && <p>alyma0787@gmail.com</p>}
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
                    window.open("https://www.instagram.com/alym._kg/")
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
          <div className={ab.downline}>
            <img className={ab.bg2} src={bg2} alt="" />
            <p className={ab.descr}>
              Мы не просто строим&nbsp;{" "}
              <span className={ab.mainWord}>дома</span>
              <br /> Мы закладываем фундамент вашего&nbsp;&nbsp;
              <span className={ab.mainWord}>уюта</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
