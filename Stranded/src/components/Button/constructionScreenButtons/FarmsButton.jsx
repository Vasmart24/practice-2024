import "./farmsButton.css";
import Button from "../Button";
import farmsData from "../../../Data/baseData/farmsData";

function FarmButtonLvl1({ onClick, disabled}) {
    const farmButtonClass = `farm-button`;
    return (
        <Button onClick={onClick} className={farmButtonClass} disabled={disabled}>
            <div>Ур: 1</div>
            <div>Шт: {farmsData.lvl1.farmslvl1}</div>
        </Button>
    );
}

export default FarmButtonLvl1;