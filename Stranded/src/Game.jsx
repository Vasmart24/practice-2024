import { useState } from "react";
import GameScreen from "./screens/GameScreen/GameScreen.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx";
import { Dropdown, theme } from "antd";
import "./Game.css";

const items = [
  {
    label: "Строительство",
    key: "1",
  },
  {
    label: "Вылазка",
    key: "2",
  },
  {
    label: "Снаряжение",
    key: "3",
  },
  {
    label: "Меню",
    key: "4",
  },
  {
    label: "Влюбиться",
    key: "5",
  },
];

export default function Game() {
  const [screen, setScreen] = useState("start");

  const {
    token: { colorBgLayout, colorTextTertiary },
  } = theme.useToken();

  return (
    <div className="game-container">
      <Header />
      <Dropdown
        menu={{
          items,
        }}
        trigger={["contextMenu"]}
      >
        <div>
          <GameScreen active={screen} setScreen={setScreen} />
        </div>
      </Dropdown>
      <Button onClick={() => setScreen("start")}>start screen</Button>
      <Button onClick={() => setScreen("resources")}>resources screen</Button>
      <Button onClick={() => setScreen("search")}>search screen</Button>
    </div>
  );
}
