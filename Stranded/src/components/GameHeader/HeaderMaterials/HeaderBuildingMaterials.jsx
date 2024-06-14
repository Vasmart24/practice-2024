import { baseResources } from "../../../Data/resources/materialsData";

function HeaderBMaterials({ counts }) {
  return (
    <ul>
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

export default HeaderBMaterials;
