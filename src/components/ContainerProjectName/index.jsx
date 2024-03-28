import React from "react";
import styles from "./styles.module.css";

export default function ContainerProjectName({ container, id }) {

  return <section id={id} className={styles.container}>{container}</section>;
}
