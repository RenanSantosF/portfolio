import React from "react";
import Span from "../../Span";
import styles from "./styles.module.css";

export default function SkillsIcon({ imgIconSkills, text }) {
  return (
    <div className={styles.wrapper}>
      <img src={imgIconSkills} />
      <Span text={text} />
    </div>
  );
}
