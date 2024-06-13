import Button from "../Button";
import "../Button.css";
import { useState } from "react";

export default function ActionButton() {

  function changeScreen() {
    console.log('screen changed to Menu')
  }

  return (
    <>
      <Button onClick={changeScreen}>Menu</Button>
    </>
  );
}
