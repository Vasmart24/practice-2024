import StartResButton from "../../components/Button/resourcesScreenButton/StartResButton";
import EasyResButton from "../../components/Button/resourcesScreenButton/EasyResButton";
import MediumResButton from "../../components/Button/resourcesScreenButton/MediumResButton";
import HardResButton from "../../components/Button/resourcesScreenButton/HardResButton";

export default function GetResourcesScreen() {
  return (
    <div>
      <StartResButton increaseCount={increaseCount}></StartResButton>
      <EasyResButton increaseCount={increaseCount}></EasyResButton>
      <MediumResButton increaseCount={increaseCount}></MediumResButton>
      <HardResButton increaseCount={increaseCount}></HardResButton>
    </div>
  );
}
