import ScreenGetResources from "../GetResourcesScreen/ScreenGetResources";
import MainScreen from "../MainScreen/MainScreen";
import ScreenSearch from "../SearchResourcesScreen/ScreenSearch";

export default function GameScreen({ active }) {
  return (
    <>
      {active === "ScreenGetResources" && <ScreenGetResources />}
      {active === "MainScreen" && <MainScreen />}
      {active === "ScreenSearch" && <ScreenSearch />}
    </>
  );
}
