import React from "react";
import styles from "./styles.module.css";

export default function Span({ text }) {
  return <span className={styles.wrapper}>{text}</span>;
}
