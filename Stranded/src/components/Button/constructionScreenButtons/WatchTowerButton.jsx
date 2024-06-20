import "./constructionButtons.css";
import Button from "../Button";
import watchTowersData from "../../../Data/baseData/watchTowersData";

function WatchTowersButtonLvl1({ onClick, disabled=false }) {
    const watchTowersButtonClass = `buildings-button watch-towers-button`;
    const lvlupButtonClass = disabled ? `lvlup-button-disabled` : `lvlup-button`;
    const countButtonClass = disabled ? `count-button-disabled` : `count-button`;
    return (
        <div onClick={onClick} className={watchTowersButtonClass} disabled={disabled}>
            <div className="buildings-button-header">
                <span>Ур: 1</span>
                <Button className={lvlupButtonClass}>&#10506;</Button>
            </div>
            <div className="buildings-button-header">
                <span>Шт: {watchTowersData.lvl1.watctowersLvl1}</span>
                <Button className={countButtonClass}>+</Button>
            </div>
        </div>
    );
}

export default WatchTowersButtonLvl1;