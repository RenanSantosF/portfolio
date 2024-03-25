import React from "react";
import Photo from "./Photo";
import PresentationMe from "./PresentationMe";
import styles from "./styles.module.css";

export default function Presentacion() {
  return (
    <div className={styles.container}>
      <PresentationMe />
      <Photo />
    </div>
  );
}
