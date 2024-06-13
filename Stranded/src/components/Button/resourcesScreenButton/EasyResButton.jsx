import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function EasyResButton() {
  const [count, setCount] = useState(
    baseResources.find((res) => res.key === 1).count
  );

  console.log(count);

  return (
    <>
      <Button>
        <div>Лёгкий уровень</div>
        <div>бедные ресурсов</div>
      </Button>
    </>
  );
}

export default EasyResButton;
