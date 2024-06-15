import { baseResources } from "../../Data/headerData/materialsData";
import "./BattleScreenWeaponList.css"

export default function BattleScreenWeaponList() {
  return(
    <div>
      <ul className="weapon_list">
        {baseResources.map(({ key, name, count }) => {
          return (
            <p className="list-item" key={key}>{name}: {count}</p>
          );
        })}
      </ul>
    </div>
  );
}