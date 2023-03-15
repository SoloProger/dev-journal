import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalTitle from "./modal-title/ModalTitle";
import ModalContent from "./modal-content/ModalContent";

export default function Modal({
  setOpen,
  title,
  children,
}) {
  const close = () => setOpen(false);
  return ReactDOM.createPortal(
    <>
      <div className={styles.modal_shadow} onClick={close} />
      <section className={styles.modal}>
        <ModalTitle title={title} />
        <hr />
        <ModalContent>{children}</ModalContent>
        <hr />
      </section>
    </>,
    document.getElementById("modal-portal")
  );
}
