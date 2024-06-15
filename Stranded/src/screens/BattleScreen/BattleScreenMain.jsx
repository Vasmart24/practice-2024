import Button from "../../components/Button/Button";
import "./BattleScreenMain.css"
import BattleScreenWeaponList from "./BattleScreenWeaponList";


export default function BattleScreenMain() {
  return(
    <div className="screen main">
        <div className="grid newbutton">
            <Button className="newbutton">место размещения отряда</Button>
            <Button className="newbutton">место размещения отряда</Button>
            <Button className="newbutton">место размещения отряда</Button>
            <span className="screen_item-span">АВАНГАРД</span>
            <Button className="newbutton">место размещения отряда</Button>
            <Button className="newbutton">место размещения отряда</Button>
            <Button className="newbutton">место размещения отряда</Button>
            <span className="screen_item-span">ФЛАНГ</span>
            <Button className="newbutton">место размещения отряда</Button>
            <Button className="newbutton">место размещения отряда</Button>
            <Button className="newbutton">место размещения отряда</Button>
            <span className="screen_item-span">ТЫЛ</span>
            <div></div>
            <Button className="grid_item-stranch">Главный герой</Button>
            <div></div>
            <span className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</span>
        </div>
        <div>
          <div className="weapon">
            <Button>Вкладка с оружием</Button>
            <Button>Вкладка с мутациями</Button>
          </div>
        <div className="center">Доступные виды вооружений</div>
        <div className="weapon-list">
          <BattleScreenWeaponList></BattleScreenWeaponList>
        </div>
      </div>
  </div>
  )
}