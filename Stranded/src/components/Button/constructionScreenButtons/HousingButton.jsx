import "./constructionButtons.css";
import Button from "../Button";
import housingData from "../../../Data/baseData/housingData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";

const [wood, stone, ...materials] = materialsData;

function HousingButtonLvl1({ disabled=false, handleSetMaterials }) {

    const [housingCount, setHousingCount] = useState(housingData.lvl1.housesLvl1);

    const ismaxHouses = housingData.lvl1.maxHouses === housingCount;
    const isEnoughResourcesForBuild = wood.count >= housingData.lvl1.cost.wood;

    const housingButtonClass = `buildings-button housing-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div className={housingButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Дом Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {housingCount}</span>
                <Button className={countButtonClass} disabled={ismaxHouses || !isEnoughResourcesForBuild}
                onClick={() => {
                    setHousingCount(housingCount + 1);
                    wood.count -= housingData.lvl1.cost.wood;
                    console.log(wood);
                    handleSetMaterials(wood);
                }}>
                    +
                    <i className="building-cost">
                        <h3>Стоимость строительства:</h3>
                        <ul>
                            <li>Брёвна: {housingData.lvl1.cost.wood}</li>
                        </ul>
                    </i>
                </Button>
            </div>
        </div>
    );
}

export default HousingButtonLvl1;
