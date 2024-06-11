// import Button from "./components/Button/Button";
// import Resources from "./components/Header/Resources";
import { useState } from "react";
import { baseResources } from "./resources/baseResources";

function Resource( props ) {
  return (
        <li>
          <p>{props.name}: {props.count}</p>
        </li>
      )}


export default function App() {
  // const [resources, setResources] = useState(baseResources);

  return (
    <div>
      <main>
        <ul>
        <Resource {...baseResources[0]}></Resource>
        <Resource {...baseResources[1]}></Resource>
        <Resource {...baseResources[2]}></Resource>
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
