import { useState } from "react";
import Button from "../Button";
import '../Button.css'

export default function ActionButton() {
  const [isActive, setIsActive] = useState(false);

  function openModal(text) {
    console.log(text);
  }

  return(
    <>
    <Button  onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={() => openModal('actionsModal')} isActive={isActive}>Actions</Button>
    </>
  )
}
