import GetResourcesScreen from "../GetResourcesScreen/GetResourcesScreen";
import MainScreen from "../MainScreen/MainScreen";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import "./GameScreen.css";

export default function GameScreen({ active, setScreen }) {
  return (
    <div className="gameScreen">
      {active === "resources" && <GetResourcesScreen />}
      {active === "start" && <MainScreen />}
      {active === "search" && <SearchScreen />}
    </div>
  );
}
