import React, { useState } from "react";
import nb from "./Navbar.module.css";
import logo from "../../img/logo2.svg";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <div className={nb.section}>
        <div className={nb.container}>
          <div className={nb.leftside}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <img className={nb.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={nb.middle}>
            <ul className={nb.navlist}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <li>Кто Мы</li>
              </Link>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <li>Как мы работаем</li>
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <li>Проекты</li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <li>Контакты</li>
              </Link>
            </ul>
          </div>
          <div className={nb.rightside}>
            <div onClick={() => setOpenModal(true)} className={nb.order}>
              Оставьте заявку
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
