import "./ConstructionScreen.css";
import FarmButtonLvl1 from "../../components/Button/constructionScreenButtons/FarmsButton";
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
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>

                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>

                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>

                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                    <FarmButtonLvl1></FarmButtonLvl1>
                </div>
            </div>
        </Dropdown>
    )
}