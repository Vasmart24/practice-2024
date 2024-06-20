import "./ConstructionScreen.css";
import FarmButtonLvl1 from "../../components/Button/constructionScreenButtons/FarmsButton";
import HousingButtonLvl1 from "../../components/Button/constructionScreenButtons/HousingButton";
import StorageButtonLvl1 from "../../components/Button/constructionScreenButtons/StorageButton";
import LockedBuilding from "../../components/Button/constructionScreenButtons/LockedBuilding";
import { Dropdown } from "antd";
import { useState } from "react";
import {
  screenStates,
} from "../../Data/reusableStatesStrings";

export default function ConstructionScreen({handleSetScreen}) {
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
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                </div>
                <div className="buildings">
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <HousingButtonLvl1></HousingButtonLvl1>
                    <StorageButtonLvl1></StorageButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>

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