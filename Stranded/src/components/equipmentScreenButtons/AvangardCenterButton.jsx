import Button from "../Button/Button.jsx";

function AvangardCenterButton({ onClick, className, picture }) {
  console.log(picture);
  return (
    <Button className={className} onClick={onClick}>
      <div></div>
    </Button>
  );
}

export default AvangardCenterButton;
