import GetResourcesScreen from "../GetResourcesScreen/GetResourcesScreen";
import MainScreen from "../MainScreen/MainScreen";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";

export default function GameScreen({ active }) {
  return (
    <>
      {active === "GetResourcesScreen" && <GetResourcesScreen />}
      {active === "MainScreen" && <MainScreen />}
      {active === "SearchScreen" && <SearchScreen />}
    </>
  );
}
