import React from "react";
import stage from "./Stage.module.css";

const Stage = () => {
  return (
    <div>
      <div className={stage.section} id="stage">
        <div className={stage.container}>
          <div className={stage.item}>1</div>
          <div className={stage.item}>2</div>
          <div className={stage.item}>3</div>
          <div className={stage.item}>4</div>
          <div className={stage.item}>5</div>
          <div className={stage.item}>6</div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
