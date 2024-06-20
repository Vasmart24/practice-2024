import Button from "../Button/Button.jsx";

function MainHeroButton({ onClick, className, text }) {
    return (
      <Button className={className} onClick={onClick}>
        <div>{ text }</div>
      </Button>
    );
  }
  
  export default MainHeroButton;
