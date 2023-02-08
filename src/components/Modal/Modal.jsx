import React, { useState } from "react";
import mdl from "./Modal.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://sheetdb.io/api/v1/pqei9iwyn55ln";

const Modal = ({ open, onClose }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    tel: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post(API, {
          name: newUser.name,
          tel: newUser.tel,
        })
        .then(() => onClose);
      setNewUser({
        name: "",
        tel: "",
      });
    } catch (err) {
      {
        `${err.message}` && alert("Введите имя и телефон");
      }
    }
  };

  const handleClose = () => {
    setTimeout(() => {
      alert("Вы успешно отправили данные");
      onClose();
    }, 2000);
  };

  if (!open) return null;
  return (
    <>
      <div className={mdl.section} onClick={onClose}>
        <div className={mdl.container}>
          <div className={mdl.box} onClick={(e) => e.stopPropagation()}>
            <div className={mdl.wrapper}>
              <p className={mdl.text}>
                Оставьте свои данные и наши менеджера с вами свяжуться
              </p>
              <div className={mdl.closeModal} onClick={onClose}>
                X
              </div>
            </div>
            <form onSubmit={handleSubmit} className={mdl.form}>
              <input
                className={mdl.inp}
                type="text"
                value={newUser.name}
                placeholder="Введите имя"
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
              <input
                className={mdl.inp}
                type="number"
                value={newUser.tel}
                placeholder="Введите номер телефона"
                onChange={(e) =>
                  setNewUser({ ...newUser, tel: e.target.value })
                }
              />
              <button
                onClick={handleClose}
                className={mdl.modalBtn}
                type="submit"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
