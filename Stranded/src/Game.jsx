import { useState } from "react";
import GameScreen from "./screens/GameScreen/GameScreen.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx";

export default function Game() {
  const [screen, setScreen] = useState("start");

  return (
    <>
      <Header />
      <GameScreen active={screen} setScreen={setScreen} />
      <Button onClick={() => setScreen('start')}>start screen</Button>
      <Button onClick={() => setScreen('resources')}>resources screen</Button>
      <Button onClick={() => setScreen('search')}>search screen</Button>
      <Button onClick={() => setScreen('equipment')}>equipment screen</Button>
    </>
  );
}
