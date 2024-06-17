import ActionButton from "../Button/mainScreenButtons/ActionButton";
import Button from "../Button/Button";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Button>Equipment</Button>
      <ActionButton></ActionButton>
      <Button>Menu</Button>
    </footer>
  );
}

export default Footer;
