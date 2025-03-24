import Botao from "../Botao";
import deleteImg from "/src/assets/imgs/delete.png";
import closeImg from "/src/assets/imgs/close.png";
import saveImg from "/src/assets/imgs/save.png";
import styles from "../styles.module.css";

const RodapeTarefas = () => {
  return (
    <footer className={styles["form-add-task__footer"]}>
      <Botao
        icone={deleteImg}
        type="button"
        className={`${styles["form-add-task__footer-button"]} ${styles["form-add-task__footer-button--delete"]}`}
      />
      <div className={styles["splitter"]}></div>
      <Botao
        icone={closeImg}
        type="button"
        className={`${styles["form-add-task__footer-button"]} ${styles["form-add-task__footer-button--cancel"]}`}
      />

      <Botao
        type="button"
        icone={saveImg}
        className={`${styles["form-add-task__footer-button"]} ${styles["form-add-task__footer-button--confirm"]}`}
      />
    </footer>
  );
};

export default RodapeTarefas;
