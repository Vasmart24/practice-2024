import { useState } from "react";
import GameScreen from "./screens/GameScreen/GameScreen.jsx";
import Header from "./components/Header/Header.jsx";

export default function Game() {
  const [screen, setScreen] = useState("start");

  return (
    <>
      <Header />
      <GameScreen active={screen} setScreen={setScreen} />
    </>
  );
}
