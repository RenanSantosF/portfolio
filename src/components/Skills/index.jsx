import React from "react";
import styles from "./styles.module.css";
import SubtitleTitle from "../SubtitleTitle";
import Title from "../Title";
import SkillsIcon from "./SkillsIcon";

//Icones das Skills IMG
import html from "../../assets/html.png";
import CSS from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import typescript from "../../assets/typescript.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongo.png";
import git from "../../assets/git.png";
import sass from "../../assets/sass.png";

export default function Skills() {
  return (
    <div id="containerHabilidades" className={styles.container}>
      <SubtitleTitle text="Habilidades" />
      <div className={styles.skills}>
        <SkillsIcon text={<Title text="HTML" />} imgIconSkills={html} />
        <SkillsIcon text={<Title text="CSS" />} imgIconSkills={CSS} />
        <SkillsIcon text={<Title text="SASS" />} imgIconSkills={sass} />
        <SkillsIcon text={<Title text="TAILWIND" />} imgIconSkills={tailwind} />
        <SkillsIcon
          text={<Title text="BOOTSTRAP" />}
          imgIconSkills={bootstrap}
        />
        <SkillsIcon
          text={<Title text="JAVASCRIPT" />}
          imgIconSkills={javascript}
        />
        <SkillsIcon text={<Title text="REACT" />} imgIconSkills={react} />
        <SkillsIcon
          text={<Title text="TYPESCRIPT" />}
          imgIconSkills={typescript}
        />
        <SkillsIcon text={<Title text="NODE" />} imgIconSkills={node} />
        <SkillsIcon text={<Title text="GIT" />} imgIconSkills={git} />
        <SkillsIcon text={<Title text="MONGO" />} imgIconSkills={mongo} />
      </div>
    </div>
  );
}
