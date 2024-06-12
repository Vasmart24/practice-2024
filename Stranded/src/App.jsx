import Button from './components/Button/Button.jsx';
// import Resources from "./components/Header/Resources";
import { useState } from "react";
import { baseResources } from './resources/baseResources.js';
import Resource from './resources/BaseResources.jsx';

function increaseRes(resname = '') {
  const resource = baseResources.find(({name}) => name === resname);
  const index = baseResources.indexOf(resource);
  baseResources[index].count += 1;
  console.log(baseResources[index]);
}

export default function App() {
  return (
    <div>
      <main>
        <ul>
        <Resource {...baseResources[0]}></Resource>
        <Resource {...baseResources[1]}></Resource>
        <Resource {...baseResources[2]}></Resource>
        <Button onClick={ () => increaseRes('wood')}>Increase wood</Button>
        <Button onClick={ () => increaseRes('stone')}>Increase stone</Button>
        <Button onClick={ () => increaseRes('iron')}>Increase iron</Button>
        </ul>
      </main>
    </div>
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
