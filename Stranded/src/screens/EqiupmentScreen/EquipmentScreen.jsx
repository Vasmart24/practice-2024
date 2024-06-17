import EquipmentScreenHeader from "./EquipmentscreenHeader.jsx"
import EquipmentScreenFooter from "./EquipmentScreenFooter.jsx"
import EquipmentScreenMain from "./EquipmentScreenMain.jsx"
import "./EquipmentScreen.css"

export default function BattleScreen() {
  return(
    <div className="battle-screen">
      <EquipmentScreenHeader/>
      <EquipmentScreenMain/>
      <EquipmentScreenFooter/>
    </div>
  )
}