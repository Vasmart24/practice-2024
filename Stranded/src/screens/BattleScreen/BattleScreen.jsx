import EnemySide from "./EnemySide.jsx"
import Friendlyside from "./FrendlySide.jsx"
import "./BattleScreen.css"

export default function BattleScreen() {
  return(
    <div className="battleScreen">
      <EnemySide/>
      <Friendlyside/>
      <div className="footer"></div>
    </div>
  )
}