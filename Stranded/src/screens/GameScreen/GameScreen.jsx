import RaidScreen from "../RaidScreen/RaidScreen";
import MainScreen from "../MainScreen/MainScreen";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import "./GameScreen.css";

export default function GameScreen({ active, setScreen }) {
  return (
    <div className="gameScreen">
      {active === "resources" && <RaidScreen />}
      {active === "start" && <MainScreen />}
      {active === "search" && <SearchScreen />}
    </div>
  );
}
