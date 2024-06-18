import Button from "../Button.jsx";
import "../Button.css";

function EasyResButton({ onClick, resType, disabled }) {
  const easyButtonClass = `easy-button ${resType}`;

  return (
    <Button onClick={onClick} className={easyButtonClass} disabled={disabled}>
      <div>Лёгкий уровень</div>
      <div>бедные ресурсов</div>
    </Button>
  );
}

export default EasyResButton;
