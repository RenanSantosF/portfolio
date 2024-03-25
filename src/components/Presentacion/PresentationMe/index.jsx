import IconRedes from "../../IconRedes";
import Subtitle from "../../Subtitle";
import Title from "../../Title";
import ButtonContact from "../ButtonContact";
import React from "react";
import styles from "./styles.module.css";
import imgGitHub from "../../../assets/gitHubIcon.png";
import imgLinkedIn from "../../../assets/linkedInIcon.png";

export default function PresentationMe() {
  return (
    <div className={styles.container}>
      <Title text="Olá, Eu sou Renan Santos" />
      <Subtitle text="Desenvolvedor Web" />
      <div className={styles.contat}>
        <ButtonContact href="#contato" text="Contate-me" />
      </div>
      

      <div className={styles.redes}>
        <IconRedes
          imgIconRedes={imgGitHub}
          linkRedes="https://github.com/RenanSantosF/"
        />
        <IconRedes
          imgIconRedes={imgLinkedIn}
          linkRedes="https://www.linkedin.com/in/renan-santos-7946bb213/"
        />
      </div>
    </div>
  );
}
