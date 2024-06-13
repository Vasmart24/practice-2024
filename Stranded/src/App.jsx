import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import ScreenSearch from "./screens/SearchResourcesScreen/ScreenSearch.jsx";
import ScreenGetResources from "./screens/GetResourcesScreen/ScreenGetResources.jsx";
import { useState } from "react";
import { baseResources } from "./resources/baseResources.js";

export default function App() {
  return (
    <>
      <ScreenSearch />
      <ScreenGetResources />
      <MainScreen></MainScreen>
    </>
  );
}
