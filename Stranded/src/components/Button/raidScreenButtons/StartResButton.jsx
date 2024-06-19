import Button from "../Button.jsx";
import "../Button.css";

function StartResButton({ onClick, resType }) {
  const startButtonClass = `start-button ${resType}`;

  return (
    <Button onClick={onClick} className={startButtonClass}>
      <div>Стартовый уровень</div>
      <div>очень бедные ресурсы</div>
    </Button>
  );
}

export default StartResButton;
