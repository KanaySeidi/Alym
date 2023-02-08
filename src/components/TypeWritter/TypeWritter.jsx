import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWritter = () => {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Play",
          color: "#ffff",
          fontWeight: 500,
          fontSize: "2.5em",
          marginTop: "-5em",
          marginBottom: "1em",
          marginLeft: "1em",
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          "Построить дом, а что нужно для этого?",
          "Ты незнаешь с чего начать?",
          "Боишься ошибиться?",
          "Не хватает сил и времени на ремонт?",
          "Надоело искать компетентных рабочих?",
          "ALYM KG поможет Вам в ремонте",
        ]}
        multiTextDelay={2000}
        typeSpeed={40}
        multiTextLoop
      />
    </div>
  );
};

export default TypeWritter;
