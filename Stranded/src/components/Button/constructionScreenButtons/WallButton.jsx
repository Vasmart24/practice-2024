import "./constructionButtons.css";
import Button from "../Button";
import wallData from "../../../Data/baseData/wallData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";

const [wood, stone, ...materials] = materialsData;

function WallButtonLvl1({ disabled=false, handleSetMaterials }) {
    const WallButtonClass = `buildings-button wall-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;

    return (
        <div className={WallButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Стена Ур 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
        </div>
    );
}

export default WallButtonLvl1;