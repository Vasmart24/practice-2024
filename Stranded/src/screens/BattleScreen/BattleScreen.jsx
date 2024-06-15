import BattleScreenHeader from "./BattlescreenHeader.jsx"
import BattleScreenFooter from "./BattleScreenFooter.jsx"
import BattleScreenMain from "./BattleScreenMain.jsx"
import "./BattleScreen.css"

export default function BattleScreen() {
  return(
    <div className="battle-screen">
      <BattleScreenHeader/>
      <BattleScreenMain/>
      <BattleScreenFooter/>
    </div>
  )
}