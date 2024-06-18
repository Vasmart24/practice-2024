import Button from "../Button/Button.jsx";

function FlankLeftButton({ onClick, className }) {
    return (
      <Button className={className} onClick={onClick}>
        <div>Место размещения отряда</div>
      </Button>
    );
  }
  
  export default FlankLeftButton;
