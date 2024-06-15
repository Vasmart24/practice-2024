// import { useState } from "react";
// import GameScreen from "./screens/GameScreen/GameScreen.jsx";
// import Header from "./components/Header/Header.jsx";
import BattleScreen from "./screens/BattleScreen/BattleScreen.jsx";

// export default function Game() {
//   const [screen, setScreen] = useState("start");

//   return (
//     <>
//       <Header />
//       <GameScreen active={screen} setScreen={setScreen} />
//     </>
//   );
// }

export default function Game() {
  return(
    <BattleScreen/>
  )
}
