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
          <MainHeroButton className="battle_screen-button" text="Главный Босс"/>
          <div></div>
          <div className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</div>
          <RearRightButton className="battle_screen-button"/>
          <RearCenterButton className="battle_screen-button"/>
          <RearLeftButton className="battle_screen-button"/>
          <span className="screen_item-span">ТЫЛ</span>
          <FlankRightButton className="battle_screen-button"/>
          <FlankCenterButton className="battle_screen-button"/>
          <FlankLeftButton className="battle_screen-button"/>
          <span className="screen_item-span">ФЛАНГ</span>
          <AvangardRightButton className="battle_screen-button"/>
          <AvangardCenterButton className="battle_screen-button"/>
          <AvangardLeftButton className="battle_screen-button"/>
          <span className="screen_item-span">АВАНГАРД</span>
        </div>
      </div>
    )
}