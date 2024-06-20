import "./farmsButton.css";
import Button from "../Button";
import farmsData from "../../../Data/baseData/farmsData";

function FarmButtonLvl1({ onClick, disabled }) {
    const farmButtonClass = `buildings-button farm-button`;
    return (
        <Button onClick={onClick} className={farmButtonClass} disabled={disabled}>
            <div className="buildings-button-header"><span>Ур: 1</span><span>&#10506;</span></div>
            <div className="buildings-button-header"><span>Шт: {farmsData.lvl1.farmslvl1}</span><span>+</span></div>
        </Button>
    );
}

export default FarmButtonLvl1;