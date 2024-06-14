import MainScreen from "./screens/MainScreen/MainScreen.jsx";
import ScreenSearch from "./screens/SearchResourcesScreen/ScreenSearch.jsx";
import ScreenGetResources from "./screens/GetResourcesScreen/ScreenGetResources.jsx";
import { useState } from "react";
import { baseResources } from "./Data/headerData/materialsData.js";

export default function Game() 
{
  return (
    <>
      <MainScreen></MainScreen>
      <ScreenSearch />
      <ScreenGetResources />
    </>
  );
}
