import { baseResources } from "../../Data/headerData/materialsData.js";
import Button from "../../components/Button/Button.jsx";
import "./EquipmentScreenWeaponList.css"

function EquipmentScreenWeaponList() {
  return(
    <div>
      <ul className="weapon_list">
        {baseResources.map(({ key, name, count }) => {
          return (
            <Button className={'weapon list'} key={key}>{name}: {count}</Button>
          );
        })}
      </ul>
    </div>
  );
}

export default EquipmentScreenWeaponList
