import { baseResources } from "../../Data/headerData/materialsData";
import Button from "../../components/Button/Button.jsx";
import "./BattleScreenWeaponList.css"

function BattleScreenWeaponList() {
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

export default BattleScreenWeaponList
