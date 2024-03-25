import React from "react";
import styles from "./styles.module.css";
import imgProfile from "../../../assets/profile.png"

export default function Photo() {
  return (
    <div className={styles.wrapper}>
      <img
        src={imgProfile}
        alt=""
      />
    </div>
  );
}
