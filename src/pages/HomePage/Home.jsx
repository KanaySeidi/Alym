import React from "react";
import TypeWritter from "../../components/TypeWritter/TypeWritter";
import hero from "../../img/mainPlakat.jpg";
import down from "../../img/down.png";
import home from "./Home.module.css";
import { Link } from "react-scroll";
import Stage from "../StagePage/Stage";
import About from "../AboutUsPage/About";
import ServicesPage from "../ServicesPage/ServicesPage";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className={home.section} id="home">
        <img className={home.introImg} src={hero} alt="hero img" />
        <div className={home.container}>
          <TypeWritter />
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >
            <img className={home.stage} src={down} alt="down arrow icon" />
          </Link>
          <About />
          <Stage />
          <ServicesPage />
        </div>
      </div>
    </>
  );
};

export default Home;
