import MainScreen from "../MainScreen/MainScreen";
import GetResourcesScreen from "../GetResourcesScreen/GetResourcesScreen";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import BattleScreen from "../BattleScreen/BattleScreen";
import "./GameScreen.css";

export default function GameScreen({ active, setScreen }) {
  return (
    <>
      {active === "resources" && <GetResourcesScreen />}
      {active === "start" && <MainScreen />}
      {active === "search" && <SearchScreen />}
      {active === "equipment" && <BattleScreen />}
    </>
  );
}
