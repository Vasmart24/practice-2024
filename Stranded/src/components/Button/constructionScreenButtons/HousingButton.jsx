import "./constructionButtons.css";
import Button from "../Button";
import housingData from "../../../Data/baseData/housingData";

function HousingButtonLvl1({ onClick, disabled=false }) {
    const housingButtonClass = `buildings-button housing-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div onClick={onClick} className={housingButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-footer">
                <span>Шт: {housingData.lvl1.housesLvl1}</span>
                <Button className={countButtonClass}>+</Button>
            </div>
        </div>
    );
}

export default HousingButtonLvl1;