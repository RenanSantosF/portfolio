import React from "react";
import styles from "./styles.module.css";

export default function Container({ container, id }) {

  return <section id={id} className={styles.container}>{container}</section>;
}
