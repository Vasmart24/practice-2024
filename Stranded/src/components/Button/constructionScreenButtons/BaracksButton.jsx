import "./constructionButtons.css";
import Button from "../Button";
import barracksData from "../../../Data/baseData/barracksData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";
const [wood, stone, ...materials] = materialsData;

function BarracksButtonLvl1({ disabled=false, handleSetMaterials }) {

    const [barracksCount, setBarracksCount] = useState(barracksData.lvl1.barracklvl1);

    const isMaxBarracks = barracksData.lvl1.maxBarracksForCurrentLvl === barracksCount;
    const isEnoughResourcesForBuild = wood.count >= barracksData.lvl1.cost.wood;

    const barracksButtonClass = `buildings-button barracks-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div className={barracksButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Казарма Ур 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {barracksCount}</span>
                <Button className={countButtonClass} disabled={isMaxBarracks || !isEnoughResourcesForBuild}
                onClick={() => {
                    setBarracksCount(barracksCount + 1);
                    wood.count -= barracksData.lvl1.cost.wood;
                    console.log(wood);
                    handleSetMaterials(wood);
                }}>
                    +
                    <i className="building-cost">
                        <h3>Стоимость строительства:</h3>
                        <ul>
                            <li>Брёвна: {barracksData.lvl1.cost.wood}</li>
                        </ul>
                    </i>
                </Button>
            </div>
        </div>
    );
}

export default BarracksButtonLvl1;
