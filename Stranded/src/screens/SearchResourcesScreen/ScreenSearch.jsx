import Button from '../../components/Button/Button.jsx';
import { useState } from 'react';

// Объявляем компонент RangeSlider
const RangeSlider = () => {
    const [value, setValue] = useState(8); // Начальное значение ползунка
  
    const handleChange = (event) => {
      setValue(event.target.value); // Обновляем значение стейта при изменении ползунка
    };
  
    return (
      <div>
        <form>
          <label htmlFor="rangeSlider">Время поиска ресурсов: {value}</label>
          <input
            id="rangeSlider"
            type="range"
            min="0"
            max="16"
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
    );
  };

  // Главный компонент ScreenSearch, в который включаем RangeSlider
  export default function ScreenSearch () {
    return (
      <div>
        <h1>React Ползунок</h1>
        <RangeSlider />
        <Button>Начать поиск</Button>
      </div>
    );
  };
