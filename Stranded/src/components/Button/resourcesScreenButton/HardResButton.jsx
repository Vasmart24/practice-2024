import Button from "../Button.jsx";
import "../Button.css";

function HardResButton({ increaseCount }) {
  const resKey = 3;
  return (
    <>
      <Button
        onClick={() => {
          increaseCount(resKey);
        }}
      >
        <div>Сложный уровень</div>
        <div>Богатые ресурсы</div>
      </Button>
    </>
  );
}

export default HardResButton;
