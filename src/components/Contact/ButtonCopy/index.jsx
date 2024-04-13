import React from "react";
import styles from "./styles.module.css";

export default function ButtonCopy({ text, blank, funcao}) {


  return (
    <>
      <a onClick={funcao} className={styles.wrapper} target={blank}>
        {text}
      </a>
      <div id="renderCopy"></div>
    </>
  );
}
