import Button from "../Button.jsx";
import "../Button.css";

function EasyResButton({ increaseCount }) {
  const resKey = 1;
  return (
    <>
      <Button
        onClick={() => {
          increaseCount(resKey);
        }}
      >
        <div>Лёгкий уровень</div>
        <div>бедные ресурсов</div>
      </Button>
    </>
  );
}

export default EasyResButton;
