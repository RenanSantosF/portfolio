import React, { useState } from "react";
import styles from "./styles.module.css";
import SpanHeader from "./SpanHeader";

import imgMenuOpen from "../../assets/menuOpen.png";
import imgMenuClose from "../../assets/menuClose.png";

export default function Header({ imgHeader, id }) {
  const [menu, setmenu] = useState(false);

  const open = () => {
    setmenu(!menu);
    menu == true;

    if (menu == true) {
      menu == false;
    }
  };

  return (
    <div id={id} className={styles.container}>
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
          className={`${
            menu == false ? styles.listMenuClose : styles.listMenuOpen
          }`}
        >
          <SpanHeader
            link="#apresentacao"
            text="Home"
            />
          <SpanHeader
            link="#sobreMim"
            text="Sobre"
          />
          <SpanHeader
            link="#habilidades"
            text="Skills"
          />
          <SpanHeader
            link="#contato"
            text="Contato"
          />
        </div>
      </div>
    </div>
  );
}