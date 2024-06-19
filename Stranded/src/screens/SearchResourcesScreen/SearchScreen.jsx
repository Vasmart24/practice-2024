import Button from "../../components/Button/Button.jsx";
import RangeSlider from "./RangeSlider.jsx";

// Главный компонент ScreenSearch, в который включаем RangeSlider
export default function SearchScreen({ setActiveModalContent }) {
  const minRes = 0; // временно
  const maxRes = 100; // временно
  return (
    <div>
      <h1>Поиск ресурсов</h1>
      <RangeSlider />
      <span>
        Можно найти ресурсов: {minRes} — {maxRes}
      </span>
      <br />
      <Button
        onClick={() => {
          setActiveModalContent(begin);
        }}
      >
        Начать поиск
      </Button>
    </div>
  );
}
