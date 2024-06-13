import StartResButton from "../components/Button/resourcesScreenButton/StartResButton";
import EasyResButton from "../components/Button/resourcesScreenButton/EasyResButton";
import MediumResButton from "../components/Button/resourcesScreenButton/EasyResButton";
import HardResButton from "../components/Button/resourcesScreenButton/EasyResButton";

export default function ScreenGetResources() {
  return (
    <div>
      <StartResButton></StartResButton>
      <EasyResButton></EasyResButton>
      <MediumResButton></MediumResButton>
      <HardResButton></HardResButton>
    </div>
  );
}
