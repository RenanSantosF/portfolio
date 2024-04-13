import React from "react";
import SubtitleTitle from "../SubtitleTitle";
import Title from "../Title";
import styles from "./styles.module.css";
import Text from "../Text";

export default function AboutMe() {






  return (
    <div id="containerSobre" className={styles.container}>
      <div className={styles.header}>
        <Title text="Sobre mim" />
        <SubtitleTitle text="Sou um Desenvolvedor Web" />
      </div>
      <div className={styles.content}>
      <Text text="Como desenvolvedor de software, encontrei minha paixão desde cedo.  Mesmo na infância a tecnologia já me fascinava - a mágica de uma tela exibir imagens, responder a toques - tudo isso despertou minha curiosidade. A partir de 2023, reconheci que minha paixão poderia ser mais do que um hobby, ela me possibilitaria ter uma carreira promissora. A partir daí, entrei no mundo da programação, me mantendo atualizado sobre as últimas tecnologias e tendências." />
      <Text text="Tenho foco no desenvolvimento utilizando JavaScript, TypeScript, React, Node JS, Tailwind CSS, e outras tecnologias para criar aplicações Web de alta qualidade e valor." />
      <Text text="O que me destaca é meu comprometimento, aprendizado ágil e consistente e a facilidade em me adaptar às novas mudanças. Enfrentar novos desafios faz parte do meu dia a dia, e sou movido por uma combinação de otimismo, determinação e esforço." />
      <Text text="Se você busca um profissional responsável, apaixonado pelo que faz e pronto para superar expectativas, estou à sua disposição para ajudar a transformar suas ideias em realidade." />
      </div>
    </div>
  );
}
