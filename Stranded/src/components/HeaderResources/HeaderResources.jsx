import { baseResources } from "../../resources/baseResources";

function HeaderResources({ counts }) {
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

export default HeaderResources;
