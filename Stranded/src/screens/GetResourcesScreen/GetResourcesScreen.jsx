import StartResButton from "../../components/Button/resourcesScreenButton/StartResButton";
import EasyResButton from "../../components/Button/resourcesScreenButton/EasyResButton";
import MediumResButton from "../../components/Button/resourcesScreenButton/MediumResButton";
import HardResButton from "../../components/Button/resourcesScreenButton/HardResButton";

export default function GetResourcesScreen() {
  return (
    <div>
      <StartResButton></StartResButton>
      <EasyResButton></EasyResButton>
      <MediumResButton></MediumResButton>
      <HardResButton></HardResButton>
    </div>
  );
}
