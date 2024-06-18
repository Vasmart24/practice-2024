import AvangardCenterButton from "../../components/equipmentScreenButtons/AvangardCenterButton";
import AvangardLeftButton from "../../components/equipmentScreenButtons/AvangardLeftButton";
import AvangardRightButton from "../../components/equipmentScreenButtons/AvangardRightButton";
import FlankCenterButton from "../../components/equipmentScreenButtons/FlankCenterButton";
import FlankLeftButton from "../../components/equipmentScreenButtons/FlankLeftButton";
import FlankRightButton from "../../components/equipmentScreenButtons/FlankRightButton";
import MainHeroButton from "../../components/equipmentScreenButtons/MainHeroButton";
import RearCenterButton from "../../components/equipmentScreenButtons/RearCenterButton";
import RearLeftButton from "../../components/equipmentScreenButtons/RearLeftButton";
import RearRightButton from "../../components/equipmentScreenButtons/RearRightButton";
import "./EnemySide.css"

export default function EnemySide() {
    return (
      <div className="enemySide">
        <div className="enemy_grid">
          <div></div>
          <MainHeroButton className="newbutton" text="Главный Босс"/>
          <div></div>
          <div className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</div>
          <RearRightButton className="newbutton"/>
          <RearCenterButton className="newbutton"/>
          <RearLeftButton className="newbutton"/>
          <span className="screen_item-span">ТЫЛ</span>
          <FlankRightButton className="newbutton"/>
          <FlankCenterButton className="newbutton"/>
          <FlankLeftButton className="newbutton"/>
          <span className="screen_item-span">ФЛАНГ</span>
          <AvangardRightButton className="newbutton"/>
          <AvangardCenterButton className="newbutton"/>
          <AvangardLeftButton className="newbutton"/>
          <span className="screen_item-span">АВАНГАРД</span>
        </div>
      </div>
    )
}