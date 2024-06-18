import EquipmentScreenHeader from "./EquipmentscreenHeader.jsx";
// import EquipmentScreenFooter from "./EquipmentScreenFooter.jsx"
import EquipmentScreenMain from "./EquipmentScreenMain.jsx";
import "./EquipmentScreen.css";
import { Dropdown } from "antd";
import screenStates from "../../Data/screenData/screenStates.js";

export default function BattleScreen({ handleSetScreen }) {
  const { start } = screenStates;

  const dropdown = {
    menu: {
      items: [
        {
          label: "Назад",
          key: "0",
        },
      ],
      onClick: () => {
        handleSetScreen(start);
      },
    },
    trigger: ["contextMenu"],
  };

  return (
    <Dropdown {...dropdown}>
      <div className="equipment-screen">
        <EquipmentScreenHeader />
        <EquipmentScreenMain />
        {/* <EquipmentScreenFooter/> */}
      </div>
    </Dropdown>
  );
}
