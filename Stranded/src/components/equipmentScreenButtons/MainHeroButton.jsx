import Button from "../Button/Button.jsx";

function MainHeroButton({ onClick, className }) {
    return (
      <Button className={className} onClick={onClick}>
        <div>Главный герой</div>
      </Button>
    );
  }
  
  export default MainHeroButton;
