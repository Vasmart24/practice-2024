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
          <MainHeroButton className="newbutton" text="Главный герой"/>
          <div></div>
          <div className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</div>
        </div>
     </div>
    )
}