import React from "react";
import ContainerProject from "./ContainerProject";
import styles from "./styles.module.css";
import imgProjectTest from "../../assets/imgProjectTest.jpg";
import IconTec from "../IconTec";
import Container from "../Container"


// Importação das imagens dos projetos
import jogoVelha from "../../assets/jogoVelha.png"
import imgBuscadorCep from "../../assets/imgBuscadorCep.png"

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
import SubtitleTitle from "../SubtitleTitle";

export default function Projects() {
  return (
    <>
    <section id="projetos" className={styles.title} ><SubtitleTitle text='Projetos' /></section>;
        <div className={styles.container}>
        


        <ContainerProject
          imgIconTecnologies={[
            <IconTec imgIconRedes={html} />,
            <IconTec imgIconRedes={CSS} />,
            <IconTec imgIconRedes={javascript} />,
            <IconTec imgIconRedes={node} />,
          ]}
          projectTitle="Jogo da Velha Online"
          projectContent="Desenvolvi um jogo da velha multiplayer em tempo real utilizando o protocolo WebSocket (WS) através do framework Socket.IO. Esse protocolo, ao contrário do HTTP, possibilita que o servidor envie informações para o cliente sem que este precise solicitar, tornando viável a criação de aplicações como chats e jogos online."
          imgProject={jogoVelha}
          linkButton1="https://jogo-da-velha-online-1.onrender.com/"
          linkButton2="https://github.com/RenanSantosF/jogo-da-velha-Online"
          textButton1="Ver projeto"
          textButton2="< Repositório />"
        />


        <ContainerProject
          imgIconTecnologies={[
            <IconTec imgIconRedes={html} />,
            <IconTec imgIconRedes={CSS} />,
            <IconTec imgIconRedes={javascript} />,
            <IconTec imgIconRedes={node} />,
          ]}
          projectTitle="Buscador de CEP"
          projectContent="Um site que faz integração com uma API externa para buscar CEPs através de requisições GET, manipula os dados e exibe corretamente.
          Esta integração simplifica o processo de busca de CEPs acrescenta eficiência e praticidade à experiência do usuário."
          imgProject={imgBuscadorCep}
          linkButton1="https://renansantosf.github.io/bucadorCep/"
          linkButton2="https://github.com/RenanSantosF/bucadorCep"
          textButton1="Ver projeto"
          textButton2="< Repositório />"
        />


      </div>
    </>

    

  );
}


