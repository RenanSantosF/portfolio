import React from "react";
import styles from "./styles.module.css";

export default function ButtonCopy({ text, blank }) {
  function spanEmail() {
    const textoCopiar = "renan_ferreira.es@outlook.com";
    const renderCopy = document.getElementById("renderCopy");
    let status = true

    navigator.clipboard
      .writeText(textoCopiar)
      .then(() => {
        alert('Texto copiado para a área de transferência')

      setTimeout(() => {
        textRender.style.display = "none";
      }, 1000 * 3);
      })
      .catch((err) => {
        alert("erro ao copiar o texto");
      });
  }

  return (
    <>
      <a onClick={spanEmail} className={styles.wrapper} target={blank}>
        {text}
      </a>
      <div id="renderCopy"></div>
    </>
  );
}
