import "./constructionButtons.css";
import Button from "../Button";
import farmsData from "../../../Data/baseData/farmsData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";

const [wood, stone, ...materials] = materialsData;

function FarmButtonLvl1({ disabled=false, handleSetMaterials }) {
    // function reduceResources(currentRes, cost){
    //     currentRes -= cost;
    //     return currentRes - cost;
    // };

    const [farmsCount, setFarmsCount] = useState(farmsData.lvl1.farmslvl1);
    // const [woodCount, setWoodCount] = useState(wood.count);
    const isMaxFarms = farmsData.lvl1.maxFarms === farmsCount;
    const isEnoughResourcesForBuild = wood.count >= farmsData.lvl1.cost.wood;

    const farmButtonClass = `buildings-button farm-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    console.log(JSON.stringify(materialsData));
    return (
        <div className={farmButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ферма Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-header">
                <span>Шт: {farmsCount}</span>
                <Button 
                    onClick={() => {
                        setFarmsCount(farmsCount + 1);
                        wood.count -= farmsData.lvl1.cost.wood;
                        handleSetMaterials(wood);
                    }}
                    className={countButtonClass} 
                    disabled={isMaxFarms || !isEnoughResourcesForBuild}
                >+</Button>
            </div>
        </div>
    );
}

export default FarmButtonLvl1;
