import InfoBlock from "../InfoBlock/InfoBlock"
import "./MainHeader.css"
import { blockNames } from "../../data.js"



export default function MainHeader() {
  return(
    <div className="header">
      <InfoBlock {...blockNames[0]}/>
      <InfoBlock {...blockNames[1]}/>
      <InfoBlock {...blockNames[2]}/>
      <InfoBlock {...blockNames[3]}/>
    </div>
  )
}