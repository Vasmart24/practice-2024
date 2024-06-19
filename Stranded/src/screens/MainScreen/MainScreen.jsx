import "./MainScreen.css";
import { Dropdown } from "antd";
import { screenStates } from "../../Data/reusableStatesStrings";
import raidScreenPropsData from "../../Data/screenData/raidScreenPropsData";
// import MainScreenFooter from "../../components/MainScreenFooter/MainScreenFooter";
// import MainHeader from "../../components/MainHeader/MainHeader";

export default function MainScreen({ handleSetScreen }) {
  const { resources, equipment } = screenStates;

  const dropdown = {
    menu: {
      items: [
        {
          label: "Строительство",
          key: "1",
        },
        {
          label: "Вылазка",
          key: "2",
          children: [
            {
              label: "Выжившие",
              key: "6",
            },
            {
              label: "Стройматериалы",
              key: "7",
            },
            {
              label: "Оружие",
              key: "8",
            },
            {
              label: "Припасы",
              key: "9",
            },
          ],
        },
        {
          label: "Снаряжение",
          key: "3",
        },
        {
          label: "Меню",
          key: "4",
        },
        {
          label: "Влюбиться",
          key: "5",
        },
      ],
      onClick: ({ key, keyPath }) => {
        const parentOptionKey = keyPath[1];
        if (parentOptionKey === "2") {
          if (key === "6")
            handleSetScreen(resources, {
              resType: raidScreenPropsData.resTypes.survivors,
            });
          if (key === "7")
            handleSetScreen(resources, {
              resType: raidScreenPropsData.resTypes.building,
            });
          if (key === "8")
            handleSetScreen(resources, {
              resType: raidScreenPropsData.resTypes.weapon,
            });
          if (key === "9")
            handleSetScreen(resources, {
              resType: raidScreenPropsData.resTypes.supplies,
            });
        } else if (key === "3") {
          handleSetScreen(equipment);
        }
      },
    },
    trigger: ["contextMenu"],
  };

  return (
    <Dropdown {...dropdown}>
      <div className="mainview">Привет я MainScreen</div>
    </Dropdown>
  );
}
