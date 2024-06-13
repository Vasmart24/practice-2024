import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function HardResButton({ increaseCount }) {
  const resKey = 3;
  return (
    <>
      <Button
        onClick={() => {
          increaseCount(resKey);
        }}
      >
        <div>Сложный уровень</div>
        <div>Богатые ресурсы</div>
      </Button>
    </>
  );
}

export default HardResButton;
