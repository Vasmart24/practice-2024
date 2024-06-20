import EnemySide from "./EnemySide.jsx";
import Friendlyside from "./FrendlySide.jsx";
import "./BattleScreen.css";

export default function BattleScreen({ setScreen }) {
  return (
    <div className="battleScreen">
      <EnemySide setScreen={setScreen} />
      <Friendlyside />
      <div className="footer"></div>
    </div>
  );
}
