import React from "react";
import styles from "./styles.module.css";

export default function ButtonAcessProject({
  textButton1,
  textButton2,
  linkButton1,
  linkButton2,
}) {
  return (
    <>
      <div className={styles.container}>
        <a className={styles.deploy} href={linkButton1}>
          {textButton1}
        </a>

        <a className={styles.repository} href={linkButton2}>
          {textButton2}
        </a>
      </div>
    </>
  );
}
