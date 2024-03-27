import React, { useState } from "react";
import styles from "./styles.module.css";
import SpanHeader from "./SpanHeader";

import imgMenuOpen from "../../assets/menuOpen.png";
import imgMenuClose from "../../assets/menuClose.png";

export default function Header({ imgHeader, id }) {
  const [menu, setmenu] = useState(false);
  const [altura, setAltura] = useState(90);
  const [list, setList] = useState("none");

  const open = () => {
    setmenu(menu === false ? true : false);
    setAltura(altura === 90 ? 276.44 : 90);

    setTimeout(() => {
      setList(list == "none" ? "flex"  : "none")
    }, 300);

    setList(list == "none" ? setTimeout(() => {
      "flex"
    },500) : "none")

    console.log(list, altura, menu);
  };

  return (
    <div id={id} style={{ height: `${altura}px` }} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.base}>
          <div>
            <img className={styles.imgHeader} src={imgHeader} />
          </div>

          <a id="openMenu" onClick={open} className={styles.openMenu}>
            <img src={menu == false ? imgMenuClose : imgMenuOpen} />
          </a>
        </div>
        <div
          style={{ display: `${list}` }}
          className={`${
            menu == false ? styles.listMenuClose : styles.listMenuOpen
          }`}
        >
          <SpanHeader link="#apresentacao" text="Home" />
          <SpanHeader link="#sobreMim" text="Sobre" />
          <SpanHeader link="#habilidades" text="Skills" />
          <SpanHeader link="#contato" text="Contato" />
        </div>
      </div>
    </div>
  );
}
