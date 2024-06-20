import Button from "../../components/Button/Button.jsx";
import RangeSlider from "./RangeSlider.jsx";
import { raidModalStates } from "../../Data/reusableStatesStrings.js";
import raidScreenPropsData from "../../Data/screenData/raidScreenPropsData.js";
import suppliesData from "./../../Data/headerData/suppliesData.js";
import { useState } from "react";

// Главный компонент ScreenSearch, в который включаем RangeSlider
export default function RaidModal({
  resType,
  resLevel,
  setActiveModalContent,
  setLootRange,
  setTimeRequired,
  timeRequired,
  minutes,
}) {
  const [resMult, setResMult] = useState(0);
  const [value, setValue] = useState(0); // Начальное значение ползунка
  let minRes = 0;
  let maxRes = 0;

  const handleValueChange = (value) => {
    setResMult(value / 30);
    setTimeRequired(value);
    setValue(value); // Обновляем значение стейта при изменении ползунка
  };

  if (resType === raidScreenPropsData.resTypes.supplies) {
    minRes = suppliesData[resLevel].min * resMult;
    maxRes = suppliesData[resLevel].max * resMult;
  }

  return (
    <div>
      <h1>Поиск ресурсов</h1>
      <RangeSlider
        setValue={setValue}
        setResMult={setResMult}
        setTimeRequired={setTimeRequired}
        handleValueChange={handleValueChange}
        value={value}
        minutes={minutes}
      />
      <span>
        Можно найти ресурсов: {minRes} — {maxRes}
      </span>
      <br />
      <Button
        onClick={() => {
          if (timeRequired > 0) {
            setLootRange([minRes, maxRes]);
            setTimeRequired(value);
            setActiveModalContent(raidModalStates.begin);
          }
        }}
        disabled={minutes >= 1440}
      >
        Начать поиск
      </Button>
    </div>
  );
}
