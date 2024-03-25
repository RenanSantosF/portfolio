import React from "react";
import ContainerProject from "./ContainerProject";
import styles from "./styles.module.css";
import imgProjectTest from "../../assets/imgProjectTest.jpg";
import IconTec from "../IconTec";

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
      projectTitle="Titulo do Projeto"
      projectContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imgProject={imgProjectTest}
        linkButton1="#"
        linkButton2="#"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
      <ContainerProject
        imgIconTecnologies={[<IconTec imgIconRedes={html} />, <IconTec imgIconRedes={javascript} />]}
        projectTitle="Titulo do Projeto"
        projectContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imgProject={imgProjectTest}
        linkButton1="#"
        linkButton2="#"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
      <ContainerProject
      projectTitle="Titulo do Projeto"
      projectContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imgProject={imgProjectTest}
        linkButton1="#"
        linkButton2="#"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
      <ContainerProject
      projectTitle="Titulo do Projeto"
      projectContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imgProject={imgProjectTest}
        linkButton1="#"
        linkButton2="#"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
      <ContainerProject
      projectTitle="Titulo do Projeto"
      projectContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imgProject={imgProjectTest}
        linkButton1="#"
        linkButton2="#"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
      <ContainerProject
      projectTitle="Titulo do Projeto"
      projectContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imgProject={imgProjectTest}
        linkButton1="#"
        linkButton2="#"
        textButton1="Ver projeto"
        textButton2="< Repositório />"
      />
    </div>
  );
}
