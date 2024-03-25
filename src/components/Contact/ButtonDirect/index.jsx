import React from "react";
import styles from "./styles.module.css";

export default function ButtonDirect({ text, href, blank }) {
  return (
    <a className={styles.wrapper} target={blank} href={href}>
      {text}
    </a>
  );
}
