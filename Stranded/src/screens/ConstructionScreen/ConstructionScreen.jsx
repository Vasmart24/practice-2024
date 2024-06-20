import "./ConstructionScreen.css";
import TownHallButtonLvl1 from "../../components/Button/constructionScreenButtons/TownHallButton";
import WallButtonLvl1 from "../../components/Button/constructionScreenButtons/WallButton";
import FarmButtonLvl1 from "../../components/Button/constructionScreenButtons/FarmsButton";
import HousingButtonLvl1 from "../../components/Button/constructionScreenButtons/HousingButton";
import StorageButtonLvl1 from "../../components/Button/constructionScreenButtons/StorageButton";
import LockedBuilding from "../../components/Button/constructionScreenButtons/LockedBuilding";
import BarracksButtonLvl1 from "../../components/Button/constructionScreenButtons/BaracksButton";
import WatchTowersButtonLvl1 from "../../components/Button/constructionScreenButtons/WatchTowerButton";
import { Dropdown } from "antd";
import { useState } from "react";
import {
  screenStates,
} from "../../Data/reusableStatesStrings";

export default function ConstructionScreen({handleSetScreen, handleSetMaterials}) {
    const { start } = screenStates;
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

    return (
        <Dropdown {...dropdown}>
            <div className="construction-screen">
                <div className="big-buildings">
                    <TownHallButtonLvl1></TownHallButtonLvl1>
                    <WallButtonLvl1></WallButtonLvl1>
                </div>
                <div className="buildings">
                    <FarmButtonLvl1 handleSetMaterials={handleSetMaterials}></FarmButtonLvl1>
                    <HousingButtonLvl1 handleSetMaterials={handleSetMaterials}></HousingButtonLvl1>
                    <StorageButtonLvl1></StorageButtonLvl1>
                    <BarracksButtonLvl1></BarracksButtonLvl1>
                    <WatchTowersButtonLvl1></WatchTowersButtonLvl1>

                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>

                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>

                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                    <LockedBuilding></LockedBuilding>
                </div>
            </div>
        </Dropdown>
    )
}
