import MenuOpcoes from "../MenuOpcoes";

import checkImg from "/src/assets/imgs/check.svg";
import trashImg from "/src/assets/imgs/trash.svg";

import styles from "../styles.module.css";

const CabecalhoTarefas = () => {
  return (
    <section className={styles["task-header"]}>
      <h2 className={styles["task-header__heading"]}>Lista de tarefas:</h2>
      <MenuOpcoes
        opcoes={[
          {
            rotulo: "Limpar tarefas concluídas",
            icone: checkImg,
          },
          { rotulo: "Limpar todas as tarefas", icone: trashImg },
        ]}
      />
    </section>
  );
};

export default CabecalhoTarefas;
