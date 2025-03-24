import Botao from "../Botao";
import styles from "../styles.module.css";
import checkImg from "/src/assets/imgs/check-task.png";
import trashImg from "/src/assets/imgs/trash.svg";

const ListaTarefas = ({ tarefas, deletarTarefa, marcarComoConcluida }) => {
  return (
    <ul className={styles["tasks__task-list"]}>
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className={`${styles["tasks__task-list-item"]} ${tarefa.concluida ? styles["tasks__task-list-item-complete"] : ""}`}
        >
          <Botao
            icone={checkImg}
            id="marcar-tarefa-como-concluida"
            onClick={() => marcarComoConcluida(tarefa.id)}
            className={`${styles["check-task__button"]} ${tarefa.concluida ? styles["check-task__button--complete"] : ""}`}
          />
          <p className={styles["tasks__task-list-item-description"]}>{tarefa.texto}</p>
          <Botao
            icone={trashImg}
            onClick={() => deletarTarefa(tarefa.id)}
            id="deletar-tarefa"
            className={`${styles["delete-task__button"]}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListaTarefas;
