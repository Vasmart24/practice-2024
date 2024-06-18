import "./RaidScreen.css";
import StartResButton from "../../components/Button/raidScreenButtons/StartResButton";
import EasyResButton from "../../components/Button/raidScreenButtons/EasyResButton";
import MediumResButton from "../../components/Button/raidScreenButtons/MediumResButton";
import HardResButton from "../../components/Button/raidScreenButtons/HardResButton";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import { Dropdown, Modal } from "antd";
import { useState } from "react";
import screenStates from "../../Data/screenData/screenStates";

export default function RaidScreen({ resType, handleSetScreen }) {
  const { start } = screenStates;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          disabled={true}
        ></MediumResButton>
        <HardResButton
          resType={resType}
          onClick={() => setIsModalOpen(true)}
          disabled={true}
        ></HardResButton>
        <StartResButton
          resType={resType}
          onClick={() => setIsModalOpen(true)}
        ></StartResButton>
        <EasyResButton
          resType={resType}
          onClick={() => setIsModalOpen(true)}
          disabled={true}
        ></EasyResButton>
        <Modal {...modal}>
          <SearchScreen />
        </Modal>
      </div>
    </Dropdown>
  );
}