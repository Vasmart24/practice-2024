import "./RaidScreen.css";
import StartResButton from "../../components/Button/raidScreenButtons/StartResButton";
import EasyResButton from "../../components/Button/raidScreenButtons/EasyResButton";
import MediumResButton from "../../components/Button/raidScreenButtons/MediumResButton";
import HardResButton from "../../components/Button/raidScreenButtons/HardResButton";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import { Dropdown, Modal } from "antd";
import { useState } from "react";
import {
  screenStates,
  raidModalStates,
} from "../../Data/reusableStatesStrings";

export default function RaidScreen({ resType, handleSetScreen }) {
  const { search, begin } = raidModalStates;
  const { start } = screenStates;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState(search);

  const dropdown = {
    menu: {
      items: [
        {
          label: "Назад",
          key: "0",
        },
      ],
      onClick: () => {
        handleSetScreen(start);
      },
    },
    trigger: ["contextMenu"],
  };

  const modal = {
    open: isModalOpen,
    footer: null,
    onCancel: () => setIsModalOpen(false),
  };

  return (
    <Dropdown {...dropdown}>
      <div className="raid-screen">
        <MediumResButton
          resType={resType}
          onClick={() => setIsModalOpen(true)}
        ></MediumResButton>
        <HardResButton
          resType={resType}
          onClick={() => setIsModalOpen(true)}
        ></HardResButton>
        <StartResButton
          resType={resType}
          className={"some"}
          onClick={() => setIsModalOpen(true)}
        ></StartResButton>
        <EasyResButton
          resType={resType}
          onClick={() => setIsModalOpen(true)}
        ></EasyResButton>

        <Modal {...modal}>
          {activeModalContent === search && (
            <SearchScreen setActiveModalContent={setActiveModalContent} />
          )}
          {activeModalContent === begin && (
            <div>
              ИнформацияИнформацияИнформация
              <button>Сбежать</button>
              <button>Сразиться</button>
            </div>
          )}
        </Modal>
      </div>
    </Dropdown>
  );
}
