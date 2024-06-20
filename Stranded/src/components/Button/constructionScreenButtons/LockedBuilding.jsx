import "./constructionButtons.css";

function LockedBuilding({ onClick, disabled=true }) {
    const LockedBuildingClass = `locked-building-button`;
    return (
        <div onClick={onClick} className={LockedBuildingClass} disabled={disabled}>
        </div>
    );
}

export default LockedBuilding;