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
}) {
  const [resMult, setResMult] = useState(0);
  let minRes = 0;
  let maxRes = 0;
  if (resType === raidScreenPropsData.resTypes.supplies) {
    minRes = suppliesData[resLevel].min * resMult;
    maxRes = suppliesData[resLevel].max * resMult;
  }
  return (
    <div>
      <h1>Поиск ресурсов</h1>
      <RangeSlider setResMult={setResMult} />
      <span>
        Можно найти ресурсов: {minRes} — {maxRes}
      </span>
      <br />
      <Button
        onClick={() => {
          setLootRange([minRes, maxRes]);
          setActiveModalContent(raidModalStates.begin);
        }}
      >
        Начать поиск
      </Button>
    </div>
  );
}
