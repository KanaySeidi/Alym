import React from "react";
import TypeWritter from "../../components/TypeWritter/TypeWritter";
import hero from "../../img/mainPlakat.jpg";
import down from "../../img/down.png";
import home from "./Home.module.css";
import { Link } from "react-scroll";
import Stage from "../StagePage/Stage";

const Home = () => {
  return (
    <>
      <div className={home.section} id="home">
        <img className={home.heroimg} src={hero} alt="hero img" />
        <div className={home.container}>
          <TypeWritter />
          <Link
            to="stage"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img className={home.stage} src={down} alt="down arrow icon" />
          </Link>
          <Stage />
        </div>
      </div>
    </>
  );
};

export default Home;
