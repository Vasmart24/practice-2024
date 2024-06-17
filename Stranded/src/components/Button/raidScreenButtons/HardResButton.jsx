import Button from "../Button.jsx";
import "../Button.css";

function HardResButton({ onClick, resType }) {
  console.log(resType);
  return (
    <Button onClick={onClick}>
      <div>Сложный уровень</div>
      <div>Богатые ресурсы</div>
    </Button>
  );
}

export default HardResButton;
