import React from "react";
import ContainerProject from "./ContainerProject";
import styles from "./styles.module.css";
import imgProjectTest from "../../assets/imgProjectTest.jpg";
import IconTec from "../IconTec";


// Importação das imagens dos projetos
import jogoVelha from "../../assets/jogoVelha.png"

//Importação dos ícones das tecnologias usadas no projeto
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

export default function Projects() {
  return (
    <div className={styles.container}>
      <ContainerProject
        imgIconTecnologies={[
          <IconTec imgIconRedes={html} />,
          <IconTec imgIconRedes={CSS} />,
          <IconTec imgIconRedes={javascript} />,
          <IconTec imgIconRedes={node} />,
        ]}
        projectTitle="Jogo da Velha Online"
        projectContent="Jogo da velha em tempo real, multiplayer, desenvolvido usando o protocolo WS, através do framework Socket.Io."
        imgProject={jogoVelha}
        linkButton1="https://jogo-da-velha-online-1.onrender.com/"
        linkButton2="https://github.com/RenanSantosF/jogo-da-velha-Online"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
    </div>
  );
}
