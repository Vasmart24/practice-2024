import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function HardResButton() {
  const [count, setCount] = useState(
    baseResources.find((res) => res.key === 3).count
  );

  console.log(count);

  return (
    <>
      <Button>
        <div>Сложный уровень</div>
        <div>Богатые ресурсы</div>
      </Button>
    </>
  );
}

export default HardResButton;
