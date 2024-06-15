import { baseResources } from "../../Data/headerData/materialsData";
import "./Header.css"

function Header() {
  return (
    <header>
      <ul>
        {baseResources.map(({ key, name, count }) => {
          return (
            <p key={key}>
              {name}: {count}
            </p>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
