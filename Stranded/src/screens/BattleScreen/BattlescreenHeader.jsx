import { baseResources } from "../../Data/headerData/materialsData";
import "./BattleScreenHeader.css"

export default function BattleScreenHeader() {
  return(
    <div>
      <ul className="list">
        {baseResources.map(({ key, name, count }) => {
          return (
            <p className="list-item" key={key}>{name}: {count}</p>
          );
        })}
      </ul>
    </div>
  );
}