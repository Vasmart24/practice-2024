import Button from "../../components/Button/Button.jsx";
import RangeSlider from "./RangeSlider.jsx";

// Главный компонент ScreenSearch, в который включаем RangeSlider
export default function SearchScreen() {
  return (
    <div>
      <h1>React Ползунок</h1>
      <RangeSlider />
      <Button>Начать поиск</Button>
    </div>
  );
}
