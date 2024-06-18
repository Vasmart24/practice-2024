import EnemySide from "./EnemySide.jsx"
import Friedlyside from "./FrendlySide.jsx"
import "./BattleScreen.css"

export default function BattleScreen() {
  return(
    <div className="battleScreen">
      <EnemySide/>
      <Friedlyside/>
      <div className="footer"></div>
    </div>
  )
}