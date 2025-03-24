import { useContext } from "react";
import MenuOpcoes from "../MenuOpcoes";

import styles from "../styles.module.css";
import { TarefasContext } from "../../../context/TarefasContext";

const CabecalhoTarefas = () => {
  const { deletarTodasTarefas, deletarTarefasConcluidas } = useContext(TarefasContext);
  return (
    <section className={styles["task-header"]}>
      <h2 className={styles["task-header__heading"]}>Lista de tarefas:</h2>
      <MenuOpcoes
        deletarTodasTarefas={deletarTodasTarefas}
        deletarTarefasConcluidas={deletarTarefasConcluidas}
      />
    </section>
  );
};

export default CabecalhoTarefas;
