import { useState } from "react";
import GameScreen from "./screens/GameScreen/GameScreen.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx";
import { Dropdown } from "antd";
import "./Game.css";

const items = [
  {
    label: "Строительство",
    key: "1",
  },
  {
    label: "Вылазка",
    key: "2",
    children: [
      {
        label: "Выжившие",
        key: "6",
      },
      {
        label: "Стройматериалы",
        key: "7",
      },
      {
        label: "Оружие",
        key: "8",
      },
      {
        label: "Припасы",
        key: "9",
      },
    ],
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

// Чтобы в случае изменений строк менять их только в одном месте
const screenStates = {
  start: "start",
  resources: "resources",
  search: "search",
};

export default function Game() {
  const { start, resources, search } = screenStates;
  const [screen, setScreen] = useState(start);

  // const {
  //   token: { colorBgLayout, colorTextTertiary },
  // } = theme.useToken();

  return (
    <div className="game-container">
      <Header />
      <Dropdown
        menu={{
          items,
          onClick: ({ keyPath }) => {
            const parentOptionKey = keyPath[1];
            if (parentOptionKey === "2") {
              setScreen(resources);
            }
          },
        }}
        trigger={["contextMenu"]}
      >
        <div>
          <GameScreen active={screen} setScreen={setScreen} />
        </div>
      </Dropdown>
      <Button onClick={() => setScreen(start)}>start screen</Button>
      <Button onClick={() => setScreen(resources)}>resources screen</Button>
      <Button onClick={() => setScreen(search)}>search screen</Button>
    </div>
  );
}
