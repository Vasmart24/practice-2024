import "./constructionButtons.css";
import Button from "../Button";
import barracksData from "../../../Data/baseData/barracksData";

function BarracksButtonLvl1({ onClick, disabled=false }) {
    const barracksButtonClass = `buildings-button barracks-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div onClick={onClick} className={barracksButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {barracksData.lvl1.barracklvl1}</span>
                <Button className={countButtonClass}>+</Button>
            </div>
        </div>
    );
}

export default BarracksButtonLvl1;