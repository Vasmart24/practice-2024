import Button from "../Button/Button.jsx";

function AvangardCenterButton({ onClick, className, picture }) {
  console.log(picture);
  return (
    <Button className={className} onClick={onClick}>
      <div>Место размещения отряда</div>
    </Button>
  );
}

export default AvangardCenterButton;
