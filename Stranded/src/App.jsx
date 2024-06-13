// import Button from './components/Button/Button.jsx';
// import Resources from "./components/Header/Resources";
// import { useState } from "react";
// import Resource from './resources/BaseResources.jsx';

import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import ScreenSearch from "./screens/ScreenSearch.jsx";
import ScreenGetResources from "./screens/ScreenGetResources.jsx";
import { useState } from "react";
import { baseResources } from "./resources/baseResources.js";
// import HeaderResources from './components/HeaderResources/HeaderResources.jsx';

const countsData = {
  0: baseResources.find((res) => res.key === 0).count,
  1: baseResources.find((res) => res.key === 1).count,
  2: baseResources.find((res) => res.key === 2).count,
  3: baseResources.find((res) => res.key === 3).count,
};

export default function App() {
  const [counts, setCounts] = useState(countsData);
  console.log(counts);

  function increaseCount(resKey) {
    setCounts((counts) => {
      const newCounts = { ...counts, [resKey]: counts[resKey] + 1 };
      console.log(newCounts);
      return newCounts;
    });
  }

  return (
    <>
      <ScreenSearch />
      <ScreenGetResources increaseCount={increaseCount} />
      <MainScreen counts={counts}></MainScreen>
    </>
  );
}

// const [isActionsModalOpened, setIsActionsModalOpened] = useState(false);

// function handleActions() {
//   setIsActionsModalOpened((prevState) => !prevState);
// }

// function handleIncreaseResource(e) {
//   const increasedResId = Number(e.target.id);

//   setResources(
//     [...resources].map((resource) => {
//       if (resource.id === increasedResId) {
//         const newCount = resource.count + 1;
//         return {
//           ...resource,
//           count: newCount,
//         };
//       }
//       return resource;
//     })
//   );
// }
