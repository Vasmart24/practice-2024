// import Button from "./components/Button/Button";
// import Resources from "./components/Header/Resources";
import { useState } from 'react';
import { baseResources } from './resources/baseResources';

function Resources() {
  return (
    <li>
      <p>Древесина: 0</p>
    </li>
  )
}

export default function App() {
  return (
    <div>
      <main>
        <div>
          <ul>
            <Resources></Resources>
            <Resources></Resources>
            <Resources></Resources>
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
