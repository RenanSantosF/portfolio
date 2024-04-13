import { React, useState } from "react";
import styles from "./styles.module.css";

export default function SpanHeader({ text, link, dataInfo}) {


  return (
    <a className={styles.wrapper} data-info={dataInfo} href={link}>
      {text}
    </a>
  );
}


