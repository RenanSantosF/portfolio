import IconRedes from "../../IconRedes";
import Subtitle from "../../Subtitle";
import Title from "../../Title";
import ButtonContact from "../ButtonContact";
import React from "react";
import styles from "./styles.module.css";
import imgGitHub from "../../../assets/gitHubIcon.png";
import imgLinkedIn from "../../../assets/linkedInIcon.png";

export default function PresentationMe() {
  const open = (ev) => {
    let region = ev.target.dataset.info;

    let idRegion = document.getElementById(`${region}`);

    setTimeout(() => {
      idRegion.style.backgroundColor = "#112c40";
    }, 700);

    setTimeout(() => {
      idRegion.style.backgroundColor = "";
    }, 2 * 1000);
  };

  return (
    <div className={styles.container}>
      <Title text="Olá, Eu sou Renan Santos" />
      <Title text="Tenho 22 anos" />
      <Subtitle text="Desenvolvedor Web" />
      <div className={styles.contat}>
        <ButtonContact funcao={open} href="#contato" text="Contate-me" />
      </div>

      {/* 
      <div className={styles.redes}>
        <IconRedes
          imgIconRedes={imgGitHub}
          linkRedes="https://github.com/RenanSantosF/"
        />
        <IconRedes
          imgIconRedes={imgLinkedIn}
          linkRedes="https://www.linkedin.com/in/renan-santos-7946bb213/"
        />
      </div> */}
    </div>
  );
}
