import "./constructionButtons.css";
import Button from "../Button";
import watchTowersData from "../../../Data/baseData/watchTowersData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";

const [wood, stone, ...materials] = materialsData;

function WatchTowersButtonLvl1({ disabled=false, handleSetMaterials }) {

    const [watchTowersCount, setWatchTowersCount] = useState(watchTowersData.lvl1.watctowersLvl1);

    const isMaxWatchTowers = watchTowersData.lvl1.maxWatchTowersCount === watchTowersCount;
    const isEnoughResourcesForBuild = wood.count >= watchTowersData.lvl1.cost.wood;
    const watchTowersButtonClass = `buildings-button watch-towers-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div className={watchTowersButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Вышка Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {watchTowersCount}</span>
                <Button className={countButtonClass} disabled={isMaxWatchTowers || !isEnoughResourcesForBuild}
                onClick={() => {
                    setWatchTowersCount(watchTowersCount + 1);
                    wood.count -= watchTowersData.lvl1.cost.wood;
                    console.log(wood);
                    handleSetMaterials(wood);
                }}>
                    +
                    <i className="building-cost">
                        <h3>Стоимость строительства:</h3>
                        <ul>
                            <li>Брёвна: {watchTowersData.lvl1.cost.wood}</li>
                        </ul>
                    </i>
                </Button>
            </div>
        </div>
    );
}

export default WatchTowersButtonLvl1;
