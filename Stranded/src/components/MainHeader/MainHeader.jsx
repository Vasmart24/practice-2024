import InfoBlock from "../InfoBlock/InfoBlock";
import "./MainHeader.css";
import { blockNames } from "../../data.js";
import HeaderResources from "../HeaderResources/HeaderResources.jsx";

export default function MainHeader({ counts }) {
  console.log("жужа", counts);
  return (
    <div className="header">
      <InfoBlock {...blockNames[0]} />
      <HeaderResources counts={counts} />
      <InfoBlock {...blockNames[2]} />
      <InfoBlock {...blockNames[3]} />
    </div>
  );
}
