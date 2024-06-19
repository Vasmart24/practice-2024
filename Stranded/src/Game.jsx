import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { Dropdown, Modal } from "antd";
import { screenStates } from "./Data/reusableStatesStrings.js";
import "./Game.css";
import RaidScreen from "./screens/RaidScreen/RaidScreen.jsx";
import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import SearchScreen from "./screens/SearchResourcesScreen/SearchScreen.jsx";
import raidScreenPropsData from "./Data/screenData/raidScreenPropsData.js";
import EquipmentScreen from "./screens/EqiupmentScreen/EquipmentScreen.jsx";

export default function Game() {
  const { start, resources, search, equipment } = screenStates;
  const { survivors, materials, weapons, supplies } =
    raidScreenPropsData.resTypes;
  const raidScreen = {
    resType: survivors,
  };

  const [screen, setScreen] = useState(start);
  const [raidScreenProps, setRaidScreenProps] = useState({
    resType: survivors,
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const isDropdownActive = isModalOpen;

  function handleSetScreen(screenName, props) {
    if (screenName === resources) setRaidScreenProps(props);
    setScreen(screenName);
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
      {screen !== equipment && <Header />}
      <div className="gameScreen">
        {screen === resources && (
          <RaidScreen {...raidScreenProps} handleSetScreen={handleSetScreen} />
        )}
        {screen === start && <MainScreen handleSetScreen={handleSetScreen} />}
        {screen === search && <SearchScreen />}
        {screen === equipment && (
          <EquipmentScreen handleSetScreen={handleSetScreen} />
        )}
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
