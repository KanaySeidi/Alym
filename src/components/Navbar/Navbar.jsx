import React, { useState } from "react";
import nb from "./Navbar.module.css";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";
import logo from "../../img/logo.svg";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const setWhiteBar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", setWhiteBar);
  return (
    <>
      <div className={`${nb.navbar} ${navbar ? nb.active : navbar}`}>
        <div className={nb.container}>
          <div className={nb.leftside}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <img className={nb.logo} src={logo} alt="" />
            </Link>
          </div>
          <div className={nb.middle}>
            <ul className={nb.navlist}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li>Кто Мы</li>
              </Link>
              <Link
                to="stage"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <li>Этапы</li>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <li>Наши Услуги</li>
              </Link>
            </ul>
          </div>
          <div className={nb.rightside}>
            <div onClick={() => setOpenModal(true)} className={nb.order}>
              <span className={nb.orderS}>Оставьте заявку</span>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
