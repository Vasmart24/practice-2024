import ScreenGetResources from "../GetResourcesScreen/GetResourcesScreen";
import MainScreen from "../MainScreen/MainScreen";
import ScreenSearch from "../SearchResourcesScreen/SearchScreen";

export default function GameScreen({ active }) {
  return (
    <>
      {active === "GetResourcesScreen" && <ScreenGetResources />}
      {active === "MainScreen" && <MainScreen />}
      {active === "SearchScreen" && <ScreenSearch />}
    </>
  );
}
