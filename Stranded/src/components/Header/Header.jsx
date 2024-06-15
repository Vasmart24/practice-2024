import { baseResources } from "../../Data/headerData/materialsData";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        {baseResources.map(({ key, name, count }) => {
          return (
            <li key={key}>
              {name}: {count}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
