import React from "react";
import styles from "./styles.module.css";

export default function ButtonContact({ text, href, blank, funcao }) {
  return (
    <a onClick={funcao} data-info="contato" className={styles.wrapper} target={blank} href={href}>
      {text}
    </a>
  );
}
