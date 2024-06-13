import Button from "../Button.jsx";
import "../Button.css";
import { baseResources } from "./../../../resources/baseResources.js";
import { useState } from "react";

function StartResButton() {
  const [count, setCount] = useState(
    baseResources.find((res) => res.key === 0).count
  );

  console.log(count);

  return (
    <>
      <Button>
        <div>Стартовый уровень</div>
        <div>очень бедные ресурсы</div>
      </Button>
    </>
  );
}

export default StartResButton;
