import React from "react";
import IconRedes from "../../IconRedes";
import Span from "../../Span";
import SpanContact from "../../SpanContact";
import styles from "./styles.module.css";
import ButtonCopy from "../ButtonCopy";

export default function ContainerRedes({
  imgEmailCOntact,
  nomeRede,
  contatoRede,
  TypeButton
}) {
  return (
    <div className={styles.container}>
      <IconRedes imgIconRedes={imgEmailCOntact} />
      <Span text={nomeRede} />
      <SpanContact text={contatoRede} />
      {TypeButton}
    </div>
  );
}
