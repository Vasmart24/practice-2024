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
import "./FriendlySide.css"

export default function FrendlySide() {
    return (
      <div className="friendlySide">
        <div className="friendly_grid">
          <AvangardLeftButton className="battle_screen-button"/>
          <AvangardCenterButton className="battle_screen-button"/>
          <AvangardRightButton className="battle_screen-button"/>
          <span className="screen_item-span">АВАНГАРД</span>
          <FlankLeftButton className="battle_screen-button"/>
          <FlankCenterButton className="battle_screen-button"/>
          <FlankRightButton className="battle_screen-button"/>
          <span className="screen_item-span">ФЛАНГ</span>
          <RearLeftButton className="battle_screen-button"/>
          <RearCenterButton className="battle_screen-button"/>
          <RearRightButton className="battle_screen-button"/>
          <span className="screen_item-span">ТЫЛ</span>
          <div></div>
          <MainHeroButton className="battle_screen-button" text="Главный герой"/>
          <div></div>
          <div className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</div>
        </div>
     </div>
    )
}