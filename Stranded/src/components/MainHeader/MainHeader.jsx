import InfoBlock from "../InfoBlock/InfoBlock"
import "./MainHeader.css"
import { blockNames } from "../../data.js"
import HeaderResources from "../HeaderResources/HeaderResources.jsx"



export default function MainHeader() {
  return(
    <div className="header">
      <InfoBlock {...blockNames[0]}/>
      <HeaderResources/>
      <InfoBlock {...blockNames[2]}/>
      <InfoBlock {...blockNames[3]}/>
    </div>
  )
}