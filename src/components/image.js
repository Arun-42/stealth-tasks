import React, { useState } from "react";
import "./image.css";
import { Logo } from "./logo";
import { Modal } from "./modal";

export function Image({ modalOn, setModalOn }) {
  const ModalToggle = () => {
    setModalOn(!modalOn);
  };
  if (!modalOn) {
    return (
      <div className="modal-container">
        <Logo modal={false} ModalToggle={ModalToggle} />{" "}
      </div>
    );
  } else {
    return (
      <Modal>
        <Logo modal={true} ModalToggle={ModalToggle} />
      </Modal>
    );
  }
}
