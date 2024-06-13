import InfoBlock from "../InfoBlock/InfoBlock";
import "./MainHeader.css";
import { blockNames } from "../../data.js";
import HeaderResources from "../HeaderResources/HeaderResources.jsx";

function MainHeader({ counts }) {
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

export default MainHeader;
