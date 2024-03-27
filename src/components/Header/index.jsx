import React, { useState } from "react";
import styles from "./styles.module.css";
import SpanHeader from "./SpanHeader";

import imgMenuOpen from "../../assets/menuOpen.png";
import imgMenuClose from "../../assets/menuClose.png";

export default function Header({ imgHeader, id }) {
  const [menu, setmenu] = useState(false);
  const [altura, setAltura] = useState(90);
  const [largura, setLargura] = useState(1200);

  const open = () => {
    setmenu(menu === false ? true : false);
    setAltura(altura === 90 ? 276.44 : 90);


    console.log(list, altura, menu);
  };

  return (
    <div id={id} style={{ height: `${altura}px` }} className={styles.container}>
      <div className={styles.menu}>
        <img className={styles.imgHeader} src={imgHeader} />

        <a id="openMenu" onClick={open} className={styles.openMenu}>
          <img src={menu == false ? imgMenuClose : imgMenuOpen} />
        </a>
      </div>

      <div className={` ${styles.listMenu}   ${menu == true ? styles.active : ''}`}>
        <SpanHeader link="#apresentacao" text="Home" />
        <SpanHeader link="#sobreMim" text="Sobre" />
        <SpanHeader link="#habilidades" text="Skills" />
        <SpanHeader link="#contato" text="Contato" />
      </div>
    </div>
  );
}
