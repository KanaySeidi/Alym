import React from "react";
import hero from "../../img/hero.jpg";
import About from "../AboutUsPage/About";
import Contact from "../ContactPage/Contact";
import Projects from "../ProjectsPage/Projects";
import Work from "../WorkPage/Work";
import home from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={home.section} id="home">
        <div className={home.intro}>
          <img className={home.heroimg} src={hero} alt="hero img" />
          <div className={home.introdark}></div>
          <h2 className={home.herotxt}>
            Где качество встречается с доступностью
          </h2>
        </div>
        <div className={home.container}>
          <About />
          <Work />
          <Projects />
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
