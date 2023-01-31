import React from "react";
import hero from "../../img/mainPlakat.jpg";
import home from "./Home.module.css";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <>
      <div className={home.section} id="home">
        <div className={home.intro}>
          <img className={home.heroimg} src={hero} alt="hero img" />
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Play",
              color: "#3F3D56",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "Этапы строительство дома",
              "Тебе надоело искать рабочих",
            ]}
            multiTextDelay={1000}
            typeSpeed={60}
            multiTextLoop
          />
        </div>
        <div className={home.container}>{/* <Contact /> */}</div>
      </div>
    </>
  );
};

export default Home;
