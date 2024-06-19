import "./Header.css";
import materialsData from "../../Data/headerData/materialsData";
import { Dropdown } from "antd";
import clock from "../../Data/headerData/clockData";

function Header({ supplies, minutes }) {
  const dropdownSupplies = {
    menu: {
      items: [
        {
          label: `Прирост в день: 0`,
          key: "0",
        },
        {
          label: `Трата в день: 0`,
          key: "1",
        },
      ],
      selectable: false,
    },
    trigger: ["hover"],
  };

  const dropdownMaterials = {
    menu: {
      items: materialsData.map(({ key, name, count }) => ({
        label: `${name}: ${count}`,
        key,
      })),
      selectable: false,
    },
    trigger: ["hover"],
  };

  return (
    <header className="header">
      <div className="header__item">
        <div>
          <div>Кол-во/трата в день: 0</div>
          <div>Дней до смерти от голода: 0</div>
        </div>
      </div>
      <Dropdown {...dropdownSupplies}>
        <div className="header__item">
          <div>Припасы: {supplies}</div>
        </div>
      </Dropdown>
      <Dropdown {...dropdownMaterials}>
        <div className="header__item">
          <div>Стройматериалы</div>
        </div>
      </Dropdown>
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
        <div>Время: {clock.time(minutes)}</div>
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
