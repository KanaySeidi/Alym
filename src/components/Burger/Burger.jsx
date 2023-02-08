import React from "react";
import menu from "./Burger.module.css";

const Burger = () => {
  return (
    <>
      <button class={menu.btn}>
        <span class={menu.icon}>
          <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          </svg>
        </span>
        <span class={menu.text}>MENU</span>
      </button>
    </>
  );
};

export default Burger;
