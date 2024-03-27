import React from "react";
import SubtitleTitle from "../SubtitleTitle";
import Title from "../Title";
import styles from "./styles.module.css";
import Text from "../Text";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title text="Sobre mim" />
        <SubtitleTitle text="Sou um Desenvolvedor Web" />
      </div>
      <div className={styles.content}>
      <Text text="Sou um desenvolvedor de Software com experiência em projetos freelancers de empresas reconhecidas. Iniciei minha carreira em 2023 e me mantenho atualizado sobre novas tecnologias, buscando aprendizado constante." />
      <Text text="Tenho foco no desenvolvimento utilizando JavaScript, TypeScript, React, Node JS, Tailwind CSS, e outras tecnologias para criar aplicações Web de alta qualidade e valor." />
      <Text text="Sou ágil e consistente na aprendizagem de novas tecnologias, adaptando-me facilmente a mudanças e pronto para enfrentar novos desafios. Em três palavras, me defino como otimista, determinado e esforçado." />
      </div>
    </div>
  );
}
