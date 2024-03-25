import React from "react";
import styles from "./styles.module.css";

export default function SpanContact({ text }) {
  return <span id="spanEmail" className={styles.wrapper}>{text}</span>;
}
