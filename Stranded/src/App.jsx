// import Button from "./components/Button/Button";
// import Resources from "./components/Header/Resources";
import { useState } from 'react';
import { baseResources } from './resources/baseResources.js';

function Resources(props) {
  return (
    <li>
      <p>{props.name}: {props.count}</p>
    </li>
  )
}

export default function App() {
  return (
    <div>
      <main>
        <div>
          <ul>
            <Resources name={baseResources[0].name} count={baseResources[0].count}></Resources>
            <Resources name={baseResources[1].name} count={baseResources[1].count}></Resources>
            <Resources name={baseResources[2].name} count={baseResources[2].count}></Resources>
          </ul>
        </div>
      </main>
    </div>
  )
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
