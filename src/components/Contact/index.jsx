import React from "react";
import SubtitleTitle from "../SubtitleTitle";
import styles from "./styles.module.css";
import imgEmailCOntact from "../../assets/email.png";
import imgGitHub from "../../assets/github.png";
import imgLinkedIn from "../../assets/linkedin.png";
import imgWhatsapp from "../../assets/whatsapp.png"
import ContainerRedes from "./ContainerRedes";
import ButtonDirect from "./ButtonDirect";
import ButtonCopy from "./ButtonCopy";
export default function Contact() {


  
  return (
    <div className={styles.container}>
      <div>
        <SubtitleTitle text="Onde me encontrar? :)" />
      </div>
      <div className={styles.redes}>
        <ContainerRedes
          contatoRede="renan_ferreira.es@outlook.com"
          imgEmailCOntact={imgEmailCOntact}
          nomeRede="Email"
          TypeButton={<ButtonCopy text="Copiar email" />}
        />
        <ContainerRedes
          contatoRede="linkedin.com/in/renan-santos-7946bb213"
          imgEmailCOntact={imgLinkedIn}
          nomeRede="LinkedIn"
          TypeButton={<ButtonDirect blank='_blank' href='https://www.linkedin.com/in/renan-santos-7946bb213/' text='Ir para a página' />}
        />
        <ContainerRedes
          contatoRede="github.com/RenanSantosF"
          imgEmailCOntact={imgGitHub}
          nomeRede="Git Hub"
          TypeButton={<ButtonDirect blank='_blank' href='https://github.com/RenanSantosF' text='Ir para a página' />}
        />
        <ContainerRedes
          contatoRede="27 998836017"
          imgEmailCOntact={imgWhatsapp}
          nomeRede="WhatsApp"
          TypeButton={<ButtonDirect blank='_blank' href='https://api.whatsapp.com/send/?phone=27998836017&text=Ol%C3%A1,%20Renan!&type=phone_number&app_absent=0' text='Ir para a página' />}
        />
      </div>
    </div>
  );
}
