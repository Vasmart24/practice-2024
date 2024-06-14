import "./MainScreen.css"
import MainScreenFooter from "../../components/GameFooter/GameFooter"
import MainHeader from "../../components/MainHeader/MainHeader"

export default function MainScreen({counts}) {
  return(
    <div className="mainview">
      <MainHeader counts={counts}></MainHeader>
      <MainScreenFooter></MainScreenFooter>
    </div>
  )
}
