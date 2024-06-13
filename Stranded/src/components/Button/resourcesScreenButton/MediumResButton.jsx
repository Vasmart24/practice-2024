import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function MediumResButton() {
  const [count, setCount] = useState(
    baseResources.find((res) => res.key === 2).count
  );

  console.log(count);

  return (
    <>
      <Button>
        <div>Средний уровень</div>
        <div>Нормальные ресурсы</div>
      </Button>
    </>
  );
}

export default MediumResButton;
