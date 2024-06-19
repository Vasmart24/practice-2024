import AvangardCenterButton from "../../components/equipmentScreenButtons/AvangardCenterButton.jsx";
import AvangardLeftButton from "../../components/equipmentScreenButtons/AvangardLeftButton.jsx";
import AvangardRightButton from "../../components/equipmentScreenButtons/AvangardRightButton.jsx";
import FlankCenterButton from "../../components/equipmentScreenButtons/FlankCenterButton.jsx";
import FlankLeftButton from "../../components/equipmentScreenButtons/FlankLeftButton.jsx";
import FlankRightButton from "../../components/equipmentScreenButtons/FlankRightButton.jsx";
import MainHeroButton from "../../components/equipmentScreenButtons/MainHeroButton.jsx";
import RearCenterButton from "../../components/equipmentScreenButtons/RearCenterButton.jsx";
import RearLeftButton from "../../components/equipmentScreenButtons/RearLeftButton.jsx";
import RearRightButton from "../../components/equipmentScreenButtons/RearRightButton.jsx";
import "./EquipmentScreenMain.css";
// import EquipmentScreenWeaponList from "./EquipmentScreenWeaponList.jsx";


export default function EquipmentScreenMain() {
  return (
    <div className="screen">
      <div className="grid">
        <AvangardLeftButton className="newbutton"/>
        <AvangardCenterButton className="newbutton"/>
        <AvangardRightButton className="newbutton"/>
        <span className="screen_item-span">АВАНГАРД</span>
        <FlankLeftButton className="newbutton"/>
        <FlankCenterButton className="newbutton"/>
        <FlankRightButton className="newbutton"/>
        <span className="screen_item-span">ФЛАНГ</span>
        <RearLeftButton className="newbutton"/>
        <RearCenterButton className="newbutton"/>
        <RearRightButton className="newbutton"/>
        <span className="screen_item-span">ТЫЛ</span>
        <div></div>
        <MainHeroButton className="newbutton"/>
        <div></div>
        <div className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</div>
      </div>
      {/* <div>
        <div className="weapon">
          <Button>Вкладка с оружием</Button>
          <Button>Вкладка с мутациями</Button>
        </div>
        <div className="center">Доступные виды вооружений</div>
        <div className="weapon-list">
          <EquipmentScreenWeaponList></EquipmentScreenWeaponList>
        </div>
      </div> */}
    </div>
  );
}
