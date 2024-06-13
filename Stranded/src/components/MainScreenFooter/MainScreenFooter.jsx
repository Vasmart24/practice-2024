import ActionButton from "../Button/mainScreenButtons/ActionButton";
import Button from "../Button/Button";
import "./MainScreenFooter.css";

const MainScreenFooter = function () {
  return (
    <div className="footer">
      <Button>Equipment</Button>
      <ActionButton></ActionButton>
      <Button>Menu</Button>
    </div>
  );
};

export default MainScreenFooter;
