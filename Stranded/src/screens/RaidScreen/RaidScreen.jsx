import "./RaidScreen.css";
import StartResButton from "../../components/Button/raidScreenButtons/StartResButton";
import EasyResButton from "../../components/Button/raidScreenButtons/EasyResButton";
import MediumResButton from "../../components/Button/raidScreenButtons/MediumResButton";
import HardResButton from "../../components/Button/raidScreenButtons/HardResButton";
import SearchScreen from "../SearchResourcesScreen/SearchScreen";
import { Modal } from "antd";
import { useState } from "react";

export default function RaidScreen({ resType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(resType);

  const modal = {
    open: isModalOpen,
    footer: null,
    onCancel: () => setIsModalOpen(false),
  };

  return (
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
        <SearchScreen />
      </Modal>
    </div>
  );
}
