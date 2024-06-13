import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function EasyResButton({ increaseCount }) {
  const resKey = 1;
  return (
    <>
      <Button
        onClick={() => {
          increaseCount(resKey);
        }}
      >
        <div>Лёгкий уровень</div>
        <div>бедные ресурсов</div>
      </Button>
    </>
  );
}

export default EasyResButton;
