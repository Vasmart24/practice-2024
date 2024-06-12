// import Button from './components/Button/Button.jsx';
// import Resources from "./components/Header/Resources";
// import { useState } from "react";
// import Resource from './resources/BaseResources.jsx';

import MainHeader from './components/MainHeader/MainHeader.jsx';
import MainView from './components/MainView/MainView.jsx';
import Footer from './components/Footer/Footer'
// import HeaderResources from './components/HeaderResources/HeaderResources.jsx';

export default function App() {
  return (
    <>
      {/* <main>
        <ul>
        <Resource {...baseResources[0]}></Resource>
        <Resource {...baseResources[1]}></Resource>
        <Resource {...baseResources[2]}></Resource>
        <Button onClick={ () => increaseRes('wood')}>Increase wood</Button>
        <Button onClick={ () => increaseRes('stone')}>Increase stone</Button>
        <Button onClick={ () => increaseRes('iron')}>Increase iron</Button>
        </ul>
      </main> */}
      <MainHeader/>
      <MainView/>
      <Footer/>
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
