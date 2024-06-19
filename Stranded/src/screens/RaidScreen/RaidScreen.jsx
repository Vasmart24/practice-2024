import "./RaidScreen.css";
import StartResButton from "../../components/Button/raidScreenButtons/StartResButton";
import EasyResButton from "../../components/Button/raidScreenButtons/EasyResButton";
import MediumResButton from "../../components/Button/raidScreenButtons/MediumResButton";
import HardResButton from "../../components/Button/raidScreenButtons/HardResButton";
import RaidModal from "../SearchResourcesScreen/RaidModal.jsx";
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
  const [resLevel, setResLevel] = useState();

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
          onClick={() => {
            setResLevel("medium");
            setIsModalOpen(true);
          }}
          disabled={true}
        ></MediumResButton>
        <HardResButton
          resType={resType}
          onClick={() => {
            setResLevel("hard");
            setIsModalOpen(true);
          }}
          disabled={true}
        ></HardResButton>
        <StartResButton
          resType={resType}
          onClick={() => {
            setResLevel("start");
            setIsModalOpen(true);
          }}
        ></StartResButton>
        <EasyResButton
          resType={resType}
          onClick={() => {
            setResLevel("easy");
            setIsModalOpen(true);
          }}
          disabled={true}
        ></EasyResButton>
        <Modal {...modal}>
          {activeModalContent === search && (
            <RaidModal
              resLevel={resLevel}
              resType={resType}
              setActiveModalContent={setActiveModalContent}
            />
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
