import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx";
import { Dropdown, Modal } from "antd";
import screenStates from "./Data/screenData/screenStates.js";
import "./Game.css";
import RaidScreen from "./screens/RaidScreen/RaidScreen.jsx";
import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import SearchScreen from "./screens/SearchResourcesScreen/SearchScreen.jsx";
import raidScreenPropsData from "./Data/screenData/raidScreenPropsData.js";

export default function Game() {
  const { start, resources, search } = screenStates;
  const { survivors, building, weapon, supplies } =
    raidScreenPropsData.resTypes;
  const raidScreen = {
    resType: survivors,
  };

  const [screen, setScreen] = useState(start);
  const [raidScreenProps, setRaidScreenProps] = useState(raidScreen);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const isDropdownActive = isModalOpen;

  function handleSetScreen(screenName, props) {
    if (screenName === resources) {
      setScreen(resources);
      setRaidScreenProps(props);
    }
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
      <Header />
<<<<<<< HEAD
      <GameScreen active={screen} setScreen={setScreen} />
      <Button onClick={() => setScreen('start')}>start screen</Button>
      <Button onClick={() => setScreen('resources')}>resources screen</Button>
      <Button onClick={() => setScreen('search')}>search screen</Button>
      <Button onClick={() => setScreen('equipment')}>equipment screen</Button>
    </>
=======
      <div className="gameScreen">
        {screen === "resources" && <RaidScreen {...raidScreenProps} />}
        {screen === "start" && <MainScreen handleSetScreen={handleSetScreen} />}
        {screen === "search" && <SearchScreen />}
      </div>
      {isDropdownActive && (
        <Dropdown {...dropdown}>
          <div>
            <Modal {...modal} />
          </div>
        </Dropdown>
      )}
    </div>
>>>>>>> main
  );
}
