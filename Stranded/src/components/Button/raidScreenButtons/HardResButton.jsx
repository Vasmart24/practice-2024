import Button from "../Button.jsx";
import "../Button.css";

function HardResButton({ onClick, resType, disabled }) {
  const hardButtonClass = `hard-button ${resType}`;
  return (
    <Button onClick={onClick} className={hardButtonClass} disabled={disabled}>
      <div>Сложный уровень</div>
      <div>Богатые ресурсы</div>
    </Button>
  );
}

export default HardResButton;
