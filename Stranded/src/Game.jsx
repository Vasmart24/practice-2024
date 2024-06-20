import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { Dropdown, Modal } from "antd";
import { screenStates } from "./Data/reusableStatesStrings.js";
import "./Game.css";
import RaidScreen from "./screens/RaidScreen/RaidScreen.jsx";
import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import raidScreenPropsData from "./Data/screenData/raidScreenPropsData.js";
import EquipmentScreen from "./screens/EqiupmentScreen/EquipmentScreen.jsx";
import BattleScreen from "./screens/BattleScreen/BattleScreen.jsx";
import ConstructionScreen from "./screens/ConstructionScreen/ConstructionScreen.jsx";
import suppliesData from "./Data/headerData/suppliesData.js";
import clock from "./Data/headerData/clockData.js";
import materialsData from "./Data/headerData/materialsData.js";

const [wood, stone, iron, steel] = materialsData;

export default function Game() {
  const { start, resources, search, equipment, construction, battle } =
    screenStates;
  const { survivors, materials, weapons, supplies } =
    raidScreenPropsData.resTypes;

  const [screen, setScreen] = useState(start);
  const [raidScreenProps, setRaidScreenProps] = useState({
    resType: survivors,
  });
  const [headerProps, setHeaderProps] = useState({
    supplies: suppliesData.foodCount,
    minutes: clock.minutes,
    wood: wood,
    stone: stone,
    iton: iron,
    steel: steel,
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const isDropdownActive = isModalOpen;

  function handleSetScreen(screenName, props) {
    if (screenName === resources) setRaidScreenProps(props);
    setScreen(screenName);
  }

  function handleTimeChange(newTime) {
    setHeaderProps((headerProps) => {
      return {
        ...headerProps,
        minutes: newTime,
      };
    });
  } 

  function handleTimeAddition(minutesToAdd) {
    const newTimeInMinutes = headerProps.minutes + Number(minutesToAdd);
    setHeaderProps((headerProps) => {
      return {
        ...headerProps,
        minutes: newTimeInMinutes,
      };
    });
  }

  function handleSuppliesAddition(suppliesToAdd) {
    const curSupplies = headerProps.supplies;
    setHeaderProps((headerProps) => {
      return {
        ...headerProps,
        supplies: curSupplies + suppliesToAdd,
      };
    });
  }

  function handleSetMaterials(...materials) {
    setHeaderProps((headerProps) => {
      return {
        ...headerProps,
        materials,
      };
    });
  }

  const dropdown = {
    menu: {
      items: [
        {
          label: "Я тебя понял",
          key: "0",
        },
      ],
      onClick: ({ key }) => {
        if (key === "0") {
          setIsModalOpen(false);
        }
      },
    },
    trigger: ["contextMenu"],
  };

  const modal = {
    title: "🐁",
    open: isModalOpen,
    footer: null,
    closable: false,
    children: "Используй ПКМ для взаимодействия с игрой",
  };

  return (
    <div className="game-container">
          {screen !== battle && screen !== equipment && (<Header {...headerProps}></Header>)}
      <div className="gameScreen">
        {screen === resources && (
          <RaidScreen
            handleSetMaterials={handleSetMaterials}
            {...raidScreenProps}
            handleSetScreen={handleSetScreen}
            handleSuppliesAddition={handleSuppliesAddition}
            handleTimeAddition={handleTimeAddition}
            minutes={headerProps.minutes}
          />
        )}
        {screen === start && <MainScreen handleSetScreen={handleSetScreen} handleTimeChange={handleTimeChange}/>}
        {screen === equipment && (
          <EquipmentScreen handleSetScreen={handleSetScreen} />
        )}
        {screen === construction && (
          <ConstructionScreen
            handleSetScreen={handleSetScreen}
            handleSetMaterials={handleSetMaterials}
          />
        )}
        {screen === battle && <BattleScreen setScreen={setScreen} />}
      </div>
      {isDropdownActive && (
        <Dropdown {...dropdown}>
          <div>
            <Modal {...modal} />
          </div>
        </Dropdown>
      )}
    </div>
  );
}
