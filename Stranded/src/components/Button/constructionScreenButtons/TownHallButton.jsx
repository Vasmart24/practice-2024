import "./constructionButtons.css";
import Button from "../Button";
import townHallData from "../../../Data/baseData/townHallData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";

const [wood, stone, ...materials] = materialsData;

function TownHallButtonLvl1({ disabled=false, handleSetMaterials }) {
    const TownHallButtonClass = `buildings-button town-hall-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;

    return (
        <div className={TownHallButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ратуша Ур 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
        </div>
    );
}

export default TownHallButtonLvl1;