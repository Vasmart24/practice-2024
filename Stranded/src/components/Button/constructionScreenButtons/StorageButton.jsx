import "./constructionButtons.css";
import Button from "../Button";
import storageData from "../../../Data/baseData/storageData";

function HousingButtonLvl1({ onClick, disabled=false }) {
    const storageButtonClass = `buildings-button storage-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div onClick={onClick} className={storageButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {storageData.lvl1.storagesLvl1}</span>
                <Button className={countButtonClass}>+</Button>
            </div>
        </div>
    );
}

export default HousingButtonLvl1;