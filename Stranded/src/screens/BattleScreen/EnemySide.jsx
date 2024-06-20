import AvangardCenterButton from "../../components/equipmentScreenButtons/AvangardCenterButton";
import AvangardLeftButton from "../../components/equipmentScreenButtons/AvangardLeftButton";
import AvangardRightButton from "../../components/equipmentScreenButtons/AvangardRightButton";
import FlankCenterButton from "../../components/equipmentScreenButtons/FlankCenterButton";
import FlankLeftButton from "../../components/equipmentScreenButtons/FlankLeftButton";
import FlankRightButton from "../../components/equipmentScreenButtons/FlankRightButton";
import MainHeroButton from "../../components/equipmentScreenButtons/MainHeroButton";
import RearCenterButton from "../../components/equipmentScreenButtons/RearCenterButton";
import RearLeftButton from "../../components/equipmentScreenButtons/RearLeftButton";
import RearRightButton from "../../components/equipmentScreenButtons/RearRightButton";
import "./EnemySide.css";
import suppliesEnemies from "../../Data/enemiesData/startEnemies/suppliesEnemies";
import { Dropdown, Modal, Button } from "antd";
import { useState } from "react";
import { screenStates } from "./../../Data/reusableStatesStrings";

export default function EnemySide({ setScreen }) {
  const { start } = screenStates;
  const [hp, setHP] = useState(suppliesEnemies.rat.hp);
  const [count, setCount] = useState(suppliesEnemies.rat.count);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSetHP() {
    const newHP = hp - 5;
    if (newHP <= 0) {
      if (count !== 0) {
        setCount(() => {
          return count - 1;
        });
        setHP(suppliesEnemies.rat.hp);
      } else {
        setIsModalOpen(true);
      }
    } else {
      setHP(newHP);
    }
  }

  const dropdown = {
    menu: {
      items: [
        {
          label: `Здоровье: ${hp}`,
          key: "0",
        },
      ],
    },
    trigger: ["contextMenu"],
  };

  // const modal = {
  //   open: isModalOpen,

  //   onOk: () => {
  //     setIsModalOpen(false);
  //     setScreen(start);
  //   },
  // };

  return (
    <div className="enemySide">
      <Modal
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
          setScreen(start);
        }}
        footer={[
          <Button
            key="OK"
            onClick={() => {
              setIsModalOpen(false);
              setScreen(start);
            }}
          >
            Ура
          </Button>,
        ]}
      >
        <p>Победа!</p>
      </Modal>
      <div className="enemy_grid">
        <div></div>
        <MainHeroButton className="battle_screen-button" text="Главный Босс" />
        <div></div>
        <div className="screen_item-span">ГЛАВНОКОМАНДУЮЩИЙ</div>
        <RearRightButton className="battle_screen-button" />
        <RearCenterButton className="battle_screen-button" />
        <RearLeftButton className="battle_screen-button" />
        <span className="screen_item-span">ТЫЛ</span>
        <FlankRightButton className="battle_screen-button" />
        <FlankCenterButton className="battle_screen-button" />
        <FlankLeftButton className="battle_screen-button" />
        <span className="screen_item-span">ФЛАНГ</span>
        <AvangardRightButton className="battle_screen-button" />
        <Dropdown {...dropdown}>
          <div>
            <AvangardCenterButton
              onClick={handleSetHP}
              className="battle_screen-button"
            />
          </div>
        </Dropdown>
        <AvangardLeftButton className="battle_screen-button" />
        <span className="screen_item-span">АВАНГАРД</span>
      </div>
    </div>
  );
}
