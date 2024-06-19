import Button from "../Button.jsx";
import "../Button.css";

function MediumResButton({ onClick, resType, disabled }) {
  const mediumButtonClass = `medium-button ${resType}`;
  return (
    <Button onClick={onClick} className={mediumButtonClass} disabled={disabled}>
      <div>Средний уровень</div>
      <div>Нормальные ресурсы</div>
    </Button>
  );
}

export default MediumResButton;
