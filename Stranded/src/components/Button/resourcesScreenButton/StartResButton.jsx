import Button from "../Button.jsx";
import "../Button.css";

function StartResButton({ increaseCount }) {
  const resKey = 0;

  return (
    <>
      <Button
        onClick={() => {
          increaseCount(resKey);
        }}
      >
        <div>Стартовый уровень</div>
        <div>очень бедные ресурсы</div>
      </Button>
    </>
  );
}

export default StartResButton;
