import React from "react";
import styles from "./styles.module.css";

export default function ButtonContact({ text, href, blank }) {
  return (
    <a className={styles.wrapper} target={blank} href={href}>
      {text}
    </a>
  );
}
