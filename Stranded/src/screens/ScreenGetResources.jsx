import StartResButton from "../components/Button/resourcesScreenButton/StartResButton";
import EasyResButton from "../components/Button/resourcesScreenButton/EasyResButton";
import MediumResButton from "../components/Button/resourcesScreenButton/MediumResButton";
import HardResButton from "../components/Button/resourcesScreenButton/HardResButton";
import "./ScreenGetResources.css"

export default function ScreenGetResources({ increaseCount }) {
  console.log("мы в ScreenGetResources!!!", increaseCount);
  return (
    <div className="modal_level">
      <div className="level-item offset_left"><StartResButton increaseCount={increaseCount}/></div>
      <div className="level-item offset_right"><EasyResButton increaseCount={increaseCount}/></div>
      <div className="level-item offset_left"><MediumResButton increaseCount={increaseCount}/></div>
      <div className="level-item offset_right"><HardResButton increaseCount={increaseCount}/></div>
    </div>
  );
}
