import { baseResources } from "../../Data/headerData/materialsData";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__item">
        <div>
          <div>Кол-во/трата в день: 0</div>
          <div>Дней до смерти от голода: 0</div>
        </div>
      </div>
      <div className="header__item">
        <div>Ресурсы</div>
      </div>
      <div className="header__item">
        <div>Жители</div>
      </div>
      <div className="header__item">
        <div>Армия</div>
      </div>
      <div className="header__item">
        <div>База</div>
      </div>
      <div className="header__item">
        <div>Время</div>
      </div>
    </header>
  );
}

/* <ul className="header__item header__list">
        {baseResources.map(({ key, name, count }) => {
          return (
            <li key={key}>
              {name}: {count}
            </li>
          );
        })}
      </ul> */

export default Header;
