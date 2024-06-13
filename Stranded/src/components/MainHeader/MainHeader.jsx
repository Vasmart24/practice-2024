import InfoBlock from "../InfoBlock/InfoBlock";
import "./MainHeader.css";
import { blockNames } from "../../data.js";
import HeaderResources from "../HeaderResources/HeaderResources.jsx";
import { baseResources } from "../../resources/baseResources.js";

const countsData = {
  0: baseResources.find((res) => res.key === 0).count,
  1: baseResources.find((res) => res.key === 1).count,
  2: baseResources.find((res) => res.key === 2).count,
  3: baseResources.find((res) => res.key === 3).count,
};


function increaseCount(resKey) {
  setCounts((counts) => {
    const newCounts = { ...counts, [resKey]: counts[resKey] + 1 };
    console.log(newCounts);
    return newCounts;
  });
}

function MainHeader() {
  return (
    <div className="header">
      <InfoBlock {...blockNames[0]} />
      <HeaderResources counts={increaseCount} />
      <InfoBlock {...blockNames[2]} />
      <InfoBlock {...blockNames[3]} />
    </div>
  );
}

export default MainHeader;
