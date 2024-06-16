import Button from "../Button.jsx";
import "../Button.css";

function EasyResButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <div>Лёгкий уровень</div>
      <div>бедные ресурсов</div>
    </Button>
  );
}

export default EasyResButton;
