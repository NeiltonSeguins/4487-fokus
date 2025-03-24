import CampoTexto from "../CampoTexto";
import RodapeTarefas from "../RodapeTarefas";
import styles from "../styles.module.css";

const FormularioTarefas = () => {
  return (
    <form
      className={` ${styles["form-add-task"]} ${styles["form-add-task--hidden"]}`}
      aria-hidden="true"
    >
      <CampoTexto etiqueta="Adicionando tarefa" placeholder="No que você está trabalhando?" />
      <RodapeTarefas />
    </form>
  );
};

export default FormularioTarefas;
