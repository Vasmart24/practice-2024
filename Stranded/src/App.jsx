// import Button from "./components/Button/Button";
// import Resources from "./components/Header/Resources";
import { useState } from "react";
import { baseResources } from "./resources/baseResources";

export default function App() {
  const [resources, setResources] = useState(baseResources);
  return (
    <div>
      <main>
        <Resources resources={resources} />
      </main>
    </div>
  );
}

function Resources({ resources }) {
  return (
    <ul>
      {resources.map((res) => (
        <li key={res.key}>
          {res.name}: {res.count}
        </li>
      ))}
    </ul>
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
