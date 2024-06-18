import { baseResources } from "../../Data/headerData/materialsData.js";
import Button from "../../components/Button/Button.jsx";
import "./EquipmentScreenWeaponList.css"

function EquipmentScreenWeaponList({ className="weapon_list-item" }) {
  return(
    <div>
      <ul className="weapon_list">
        {baseResources.map(({ key, name, count }) => {
          return (
            <Button className={className} key={key}>{name}: {count}</Button>
          );
        })}
      </ul>
    </div>
  );
}

export default EquipmentScreenWeaponList
