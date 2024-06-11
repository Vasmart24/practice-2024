import Button from './components/Button/Button.jsx';
// import Resources from "./components/Header/Resources";
import { useState } from "react";
import { baseResources } from './resources/baseResources.js';
import Resource from './resources/BaseResources.jsx';

export default function App() {
  // const [resources, setResources] = useState(0);

  return (
    <div>
      <main>
        <ul>
        <Resource {...baseResources[0]}></Resource>
        <Resource {...baseResources[1]}></Resource>
        <Resource {...baseResources[2]}></Resource>
        <Button>increase Resource</Button>
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
