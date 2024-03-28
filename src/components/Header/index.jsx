import React, { useState } from "react";
import styles from "./styles.module.css";
import SpanHeader from "./SpanHeader";

import imgMenuOpen from "../../assets/menuOpen.png";
import imgMenuClose from "../../assets/menuClose.png";

const Header = ({ imgHeader, id }) => {
  const [menu, setmenu] = useState(false);
  const [altura, setAltura] = useState(90);

  const open = () => {
    setTimeout(() => {
      setmenu(menu === false && innerWidth < 1200 ? true : false);
    }, 110);

    setTimeout(() => {
      setAltura(altura === 90 && innerWidth < 1200 ? 276.44 : 90);
    }, 110);
  };

  return (
    <div id={id} style={{ height: `${altura}px` }} className={styles.container}>
      <div className={styles.menu}>
        <img className={styles.imgHeader} src={imgHeader} />

        <a id="openMenu" onClick={open} className={styles.openMenu}>
          <img src={menu == false ? imgMenuClose : imgMenuOpen} />
        </a>
      </div>

      <div
        onClick={open}
        className={` ${styles.listMenu} ${menu == true ? styles.active : ""}`}
      >
        <SpanHeader onClick={open} link="#apresentacao" text="Home" />
        <SpanHeader onClick={open} link="#sobreMim" text="Sobre" />
        <SpanHeader onClick={open} link="#habilidades" text="Habilidades" />
        <SpanHeader onClick={open} link="#contato" text="Contato" />
      </div>
    </div>
  );
};

export default Header;
