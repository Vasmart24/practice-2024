import Button from "../components/Button/Button.jsx";
import MediumResButton from "../components/Button/resourcesScreenButton/MediumResButton.jsx";
import HardResButton from "../components/Button/resourcesScreenButton/HardResButton.jsx";

export default function ScreenGetResources() {
  return (
    <div>
      <Button>Начальный уровень</Button>
      <Button>Лёгкий уровень</Button>
      <MediumResButton />
      <HardResButton />
    </div>
  );
}
