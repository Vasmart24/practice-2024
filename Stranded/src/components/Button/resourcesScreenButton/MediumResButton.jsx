import Button from "../Button.jsx";
import "../Button.css";

function MediumResButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <div>Средний уровень</div>
      <div>Нормальные ресурсы</div>
    </Button>
  );
}

export default MediumResButton;
