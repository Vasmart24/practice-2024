import Button from "../../components/Button/Button.jsx";
import "./EquipmentScreenMain.css"
import EquipmentScreenWeaponList from './EquipmentScreenWeaponList.jsx';


export default function EquipmentScreenMain() {
  return(
    <div className="screen main">
        <div className="grid">
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
            <Button className="grid_item-stranch newbutton">Главный герой</Button>
            <div></div>
            <span className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</span>
        </div>
        <div className="">
        <div className="center"><span><h3>Доступные виды вооружений</h3></span></div>
          <div className="weapon">
            <Button className="weapon_button">Оружие</Button>
            <Button className="weapon_button">Мутации</Button>
          </div>
        <div className="weapon_list">
          <EquipmentScreenWeaponList className="weapon_list-item"></EquipmentScreenWeaponList>
        </div>
      </div>
  </div>
  )
}
