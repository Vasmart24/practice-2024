import Button from "../Button.jsx";
import "../Button.css";

function StartResButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <div>Стартовый уровень</div>
      <div>очень бедные ресурсы</div>
    </Button>
  );
}

export default StartResButton;
