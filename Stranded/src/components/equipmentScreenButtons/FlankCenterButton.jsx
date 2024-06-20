import Button from "../Button/Button.jsx";

function FlankCenterButton({ onClick, className }) {
    return (
      <Button className={className} onClick={onClick}>
        <div>Место размещения отряда</div>
      </Button>
    );
  }
  
  export default FlankCenterButton;
