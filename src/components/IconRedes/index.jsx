import React from "react";
import styles from "./styles.module.css";

export default function IconRedes({ imgIconRedes, linkRedes }) {
  return (
    <div className={styles.container}>
      <a target="_blank" href={linkRedes}>
        <img src={imgIconRedes} />
      </a>
    </div>
  );
}
