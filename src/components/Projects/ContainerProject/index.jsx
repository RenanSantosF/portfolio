import React from "react";
import styles from "./styles.module.css";
import SubtitleTitle from "../../SubtitleTitle";
import Text from "../../Text";
import ButtonAcessProject from "./ButtonAcessProject";

export default function ContainerProject({
  projectTitle,
  projectContent,
  projectContent2,
  imgProject,
  textButton1,
  textButton2,
  linkButton1,
  linkButton2,
  imgIconTecnologies,
  usuario,
  senha,
}) {

  return (
    <div data-info='projetos' className={`${styles.container} alternaCorProjetos`}>
      <div className={styles.imgProject}>
        <img className="hidden" src={imgProject} />
      </div>

      <div className={styles.content}>
        <div className={styles.titleAndIcon}>
          <div className={styles.title}>
            <SubtitleTitle text={projectTitle} />
          </div>
          <div className={styles.tecnologiesIcon}>
            <div>{imgIconTecnologies}</div>
          </div>
        </div>

        <div className={styles.textLimited}>
          <Text text={projectContent} />
          <div>
            <Text text={projectContent2} />
            <span className={styles.text}>{usuario}</span>
            <span className={styles.text}>{senha}</span>
          </div>
          
        </div>
        <div className={styles.viewProjet}>
          <ButtonAcessProject 
            textButton1={textButton1}
            textButton2={textButton2}
            linkButton1={linkButton1}
            linkButton2={linkButton2}
          />
        </div>
      </div>
    </div>
  );
}
