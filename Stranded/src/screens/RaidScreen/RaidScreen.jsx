import "./RaidScreen.css";
import StartResButton from "../../components/Button/resourcesScreenButton/StartResButton";
import EasyResButton from "../../components/Button/resourcesScreenButton/EasyResButton";
import MediumResButton from "../../components/Button/resourcesScreenButton/MediumResButton";
import HardResButton from "../../components/Button/resourcesScreenButton/HardResButton";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import { Dropdown, Modal } from "antd";
import { useState } from "react";

export default function RaidScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="raid-screen">
      <StartResButton className={'some'} onClick={() => setIsModalOpen(true)}></StartResButton>
      <EasyResButton onClick={() => setIsModalOpen(true)}></EasyResButton>
      <MediumResButton onClick={() => setIsModalOpen(true)}></MediumResButton>
      <HardResButton onClick={() => setIsModalOpen(true)}></HardResButton>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <SearchScreen />
      </Modal>
    </div>
  );
}
