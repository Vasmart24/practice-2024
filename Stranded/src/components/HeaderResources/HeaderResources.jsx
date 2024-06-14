import { baseResources } from "../../resources/baseResources";
import "./HeaderResources.css"

export default function HeaderResources({ counts }) {
  console.log("мужа", counts);
  return (
    <ul className="list-item list-item_resource">
      {baseResources.map(({ key, name }) => {
        return (
          <p key={key}>
            {name}: {counts[key]}
          </p>
        );
      })}
    </ul>
  );
}
