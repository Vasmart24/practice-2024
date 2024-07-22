import "./RaidScreen.css";
import StartResButton from "../../components/Button/raidScreenButtons/StartResButton";
import EasyResButton from "../../components/Button/raidScreenButtons/EasyResButton";
import MediumResButton from "../../components/Button/raidScreenButtons/MediumResButton";
import HardResButton from "../../components/Button/raidScreenButtons/HardResButton";
import RaidModal from "../SearchResourcesScreen/RaidModal.jsx";
import { Dropdown, Modal } from "antd";
import { useState } from "react";
import {
  screenStates,
  raidModalStates,
} from "../../Data/reusableStatesStrings";
import materialsData from "../../Data/headerData/materialsData.js";
import RangeSlider from "../SearchResourcesScreen/RangeSlider.jsx";
import Button from "../../components/Button/Button.jsx";

// RAIDMODAL START
import raidScreenPropsData from "../../Data/screenData/raidScreenPropsData.js";
import suppliesData from "./../../Data/headerData/suppliesData.js";
// RAIDMODAL END

export default function RaidScreen({
  handleSetMaterials,
  resType,
  handleSetScreen,
  handleSuppliesAddition,
  handleTimeAddition,
  minutes,
}) {
  const { search, begin } = raidModalStates;
  const { start, battle } = screenStates;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState(search);
  const [resLevel, setResLevel] = useState();
  const [lootRange, setLootRange] = useState([0, 0]);
  const [timeRequired, setTimeRequired] = useState(0);

  const max = lootRange[1] + 1;
  const min = lootRange[0];
  const loot = Math.floor(Math.random() * (max - min) + min);
  const dropdown = {
    menu: {
      items: [
        {
          label: "Назад",
          key: "0",
        },
      ],
      onClick: () => {
        handleSetScreen(start);
      },
    },
    trigger: ["contextMenu"],
  };

  const modal = {
    open: isModalOpen,
    footer: null,
    onCancel: () => setIsModalOpen(false),
  };

  // RAIDMODAL START
  const [wood, ...materials] = materialsData;
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
  } else {
    minRes = wood.min * resMult;
    maxRes = wood.max * resMult;
  }
  // RAIDMODAL END

  return (
    <Dropdown {...dropdown}>
      <div className="raid-screen">
        <MediumResButton
          resType={resType}
          onClick={() => {
            setResLevel("medium");
            setIsModalOpen(true);
          }}
          disabled={true}
        ></MediumResButton>
        <HardResButton
          resType={resType}
          onClick={() => {
            setResLevel("hard");
            setIsModalOpen(true);
          }}
          disabled={true}
        ></HardResButton>
        <StartResButton
          resType={resType}
          onClick={() => {
            setResLevel("start");
            setIsModalOpen(true);
          }}
        ></StartResButton>
        <EasyResButton
          resType={resType}
          onClick={() => {
            setResLevel("easy");
            setIsModalOpen(true);
          }}
          disabled={true}
        ></EasyResButton>
        <Modal {...modal}>
          {activeModalContent === search && (
            // <RaidModal
            //   resLevel={resLevel}
            //   resType={resType}
            //   setActiveModalContent={setActiveModalContent}
            //   setLootRange={setLootRange}
            //   setTimeRequired={setTimeRequired}
            //   timeRequired={timeRequired}
            //   minutes={minutes}
            // />
            <RaidModal>
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
            </RaidModal>
          )}
          {activeModalContent === begin && (
            <div>
              <p>
                На вас напали! Вы получите {loot}
                <br />
                <span style={{ color: "red" }}>
                  При побеге полученный ресурс уменьшится вдвое!
                </span>
              </p>

              <div>
                <button
                  onClick={() => {
                    if (resType === "supplies") {
                      handleSuppliesAddition(Math.floor(loot / 2));
                      handleTimeAddition(timeRequired);
                    } else {
                      wood.count += Math.floor(loot / 2);
                      handleSetMaterials(wood);
                      handleTimeAddition(timeRequired);
                    }
                    handleSetScreen(start);
                  }}
                >
                  Сбежать
                </button>
                <button
                  onClick={() => {
                    handleSuppliesAddition(loot);
                    handleTimeAddition(timeRequired);
                    handleSetScreen(battle);
                  }}
                >
                  Сразиться
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </Dropdown>
  );
}
