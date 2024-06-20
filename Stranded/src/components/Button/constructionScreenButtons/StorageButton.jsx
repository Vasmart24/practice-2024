import "./constructionButtons.css";
import Button from "../Button";
import storageData from "../../../Data/baseData/storageData";
import materialsData from "../../../Data/headerData/materialsData";
import { useState } from "react";

const [wood, stone, ...materials] = materialsData;

function StorageButtonLvl1({ disabled=false, handleSetMaterials }) {

    const [storageCount, setStorageCount] = useState(storageData.lvl1.storagesLvl1);

    const isMaxStorages = storageData.lvl1.maxStoragesForCurrentLvl === storageCount;
    const isEnoughResourcesForBuild = wood.count >= storageData.lvl1.cost.wood;

    const storageButtonClass = `buildings-button storage-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div className={storageButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Склад Ур 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {storageCount}</span>
                <Button className={countButtonClass} disabled={isMaxStorages || !isEnoughResourcesForBuild}
                onClick={() => {
                    setStorageCount(storageCount + 1);
                    wood.count -= storageData.lvl1.cost.wood;
                    console.log(wood);
                    handleSetMaterials(wood);
                }}>
                    +
                    <i className="building-cost">
                        <h3>Стоимость строительства:</h3>
                        <ul>
                            <li>Брёвна: {storageData.lvl1.cost.wood}</li>
                        </ul>
                    </i>
                </Button>
            </div>
        </div>
    );
}

export default StorageButtonLvl1;
