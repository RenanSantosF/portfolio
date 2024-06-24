import React, { useState } from "react";
import styles from "./styles.module.css";
import SpanHeader from "./SpanHeader";

import imgMenuOpen from "../../assets/menuOpen.png";
import imgMenuClose from "../../assets/menuClose.png";

const alternaCorProjetos = document.querySelectorAll(".alternaCorProjetos");

const Header = ({ imgHeader, id }) => {
  const [menu, setmenu] = useState(false);
  const [altura, setAltura] = useState(90);

  const open = (ev) => {
    setTimeout(() => {
      setmenu(menu === false && innerWidth < 1200 ? true : false);
    }, 110);

    setTimeout(() => {
      setAltura(altura === 90 && innerWidth < 1200 ? 307 : 90);
    }, 110);

    let region = ev.target.dataset.info;

    let idRegion = document.getElementById(`${region}`);
    if (idRegion) {
      if (region == "projetos") {

        setTimeout(() => {
          alternaCorProjetos.forEach((item) => {
            item.classList.add("activeAlternaCorProjetos");
          });
        }, 700)



        setTimeout(() => {
          alternaCorProjetos.forEach((item) => {
            item.classList.remove("activeAlternaCorProjetos");
          });
        }, 2 * 1000);
      }
      setTimeout(() => {
        idRegion.style.backgroundColor = "#112c40";
      }, 700);

      setTimeout(() => {
        idRegion.style.backgroundColor = "";
      }, 2 * 1000);
    }
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
        <SpanHeader
          onClick={open}
          dataInfo="apresentacao"
          link="#apresentacao"
          text="Home"
        />
        <SpanHeader
          onClick={open}
          dataInfo="sobreMim"
          link="#sobreMim"
          text="Sobre"
        />
        <SpanHeader
          onClick={open}
          dataInfo="habilidades"
          link="#habilidades"
          text="Habilidades"
        />
        <SpanHeader
          onClick={open}
          dataInfo="projetos"
          link="#projetos"
          text="Projetos"
        />
        <SpanHeader
          onClick={open}
          dataInfo="contato"
          link="#contato"
          text="Contato"
        />
      </div>
    </div>
  );
};

export default Header;
