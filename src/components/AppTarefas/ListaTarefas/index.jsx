import styles from "../styles.module.css";

const ListaTarefas = ({ tarefas }) => {
  return (
    <ul className={styles["tasks__task-list"]}>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={styles["tasks__task-list-item"]}>
          <p className={styles["tasks__task-list-item-description"]}>{tarefa.texto}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListaTarefas;
