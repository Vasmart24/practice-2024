import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function MediumResButton({ increaseCount }) {
  const resKey = 2;
  return (
    <>
      <Button
        onClick={() => {
          increaseCount(resKey);
        }}
      >
        <div>Средний уровень</div>
        <div>Нормальные ресурсы</div>
      </Button>
    </>
  );
}

export default MediumResButton;
