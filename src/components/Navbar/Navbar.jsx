import React, { useState } from "react";
import nb from "./Navbar.module.css";
import logo from "../../img/logo2.svg";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className={nb.section}>
        <div className={nb.container}>
          <div className={nb.leftside}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <p className={nb.logo}>ALYM KG</p>
            </Link>
          </div>
          <div className={nb.middle}>
            <ul className={nb.navlist}>
              <Link to="about">
                <li>Кто Мы</li>
              </Link>
              <Link to="work">
                <li>Как мы работаем</li>
              </Link>
              <Link to="project">
                <li>Проекты</li>
              </Link>
              <Link to="contact">
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
