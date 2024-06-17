import Button from "../Button.jsx";
import "../Button.css";

function MediumResButton({ onClick, resType }) {
  console.log(resType);
  return (
    <Button onClick={onClick}>
      <div>Средний уровень</div>
      <div>Нормальные ресурсы</div>
    </Button>
  );
}

export default MediumResButton;
