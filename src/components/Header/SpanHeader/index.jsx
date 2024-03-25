import { React, useState } from "react";
import styles from "./styles.module.css";

export default function SpanHeader({ text, link}) {


  return (
    <a className={styles.wrapper} href={link}>
      {text}
    </a>
  );
}


