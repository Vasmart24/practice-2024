import Button from "../Button/Button.jsx";

function FlankRightButton({ onClick, className }) {
    return (
      <Button className={className} onClick={onClick}>
        <div>Место размещения отряда</div>
      </Button>
    );
  }
  
  export default FlankRightButton;
  