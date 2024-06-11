import Button from "./components/Button/Button";
import Resources from "./components/Header/Resources";
import { useState } from 'react';
import BaseResource from "./resources/BaseResource";

function App() {
  return (
    <div>
      <main>
        <ul>
        <Resources name={BaseResource[0].name} count={BaseResource[0].count}></Resources>
        <Resources></Resources>
        </ul>
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
