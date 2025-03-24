import styles from "../styles.module.css";

const ListaTarefas = ({ tarefas }) => {
  return (
    <ul className={styles["lista-tarefas"]}>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={styles["lista-tarefas__item"]}>
          <p>{tarefa.texto}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListaTarefas;
