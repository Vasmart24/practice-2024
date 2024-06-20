import "./constructionButtons.css";
import Button from "../Button";
import farmsData from "../../../Data/baseData/farmsData";

function FarmButtonLvl1({ onClick, disabled=false }) {
    const farmButtonClass = `buildings-button farm-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div onClick={onClick} className={farmButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-header">
                <span>Шт: {farmsData.lvl1.farmslvl1}</span>
                <Button className={countButtonClass}>+</Button>
            </div>
        </div>
    );
}

export default FarmButtonLvl1;