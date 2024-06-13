import { baseResources } from "../../resources/baseResources";

export default function HeaderResources({ counts }) {
  console.log("мужа", counts);
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
