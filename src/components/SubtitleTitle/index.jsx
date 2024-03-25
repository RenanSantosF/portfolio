import React from "react";
import styles from "./styles.module.css";

export default function SubtitleTitle({ text, link }) {
  return (
    <a className={styles.wrapper} href={link}>
      <span>{text}</span>
    </a>
  );
}
