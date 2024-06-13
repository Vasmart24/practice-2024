import Button from "../Button";
import "../Button.css";
import Modal from "../../Modal/Modal";
import { useState } from "react";

export default function ActionButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Button onClick={openModal}>Actions</Button>
      <Modal open={isModalOpen}>
        SOME MODAL TEXT
        <Button onClick={() => setIsModalOpen(false)}>Close modal</Button>
      </Modal>
    </>
  );
}
