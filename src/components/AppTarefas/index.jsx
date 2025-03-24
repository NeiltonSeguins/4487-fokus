import styles from "./styles.module.css";
import add_circleImg from "/src/assets/imgs/add_circle.png";
import Botao from "./Botao";
import CabecalhoTarefas from "./CabecalhoTarefas";
import FormularioTarefas from "./FormularioTarefas";
import ListaTarefas from "./ListaTarefas";
import { useState } from "react";

const AppTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  function adicionarTarefa(texto) {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: Math.floor(Math.random() * 100000) + Date.now(),
      texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setExibirFormulario(false);
  }

  return (
    <section className={styles["tasks"]}>
      <div className={styles["tasks__task-content"]}>
        <section className={styles["tasks__active-task"]}>
          <p className={styles["tasks__active-task-label"]}>#Em andamento:</p>
          <p className={styles["tasks__active-task-description"]}></p>
        </section>
        <CabecalhoTarefas />
        <ListaTarefas tarefas={tarefas} />
        {exibirFormulario && (
          <FormularioTarefas
            estaVisivel={exibirFormulario}
            aoSalvar={adicionarTarefa}
            aoCancelar={() => setExibirFormulario(false)}
          />
        )}
        <Botao
          onClick={() => setExibirFormulario(true)}
          icone={add_circleImg}
          className={styles["tasks__button--add-task"]}
        >
          Adicionar nova tarefa
        </Botao>
      </div>
    </section>
  );
};

export default AppTarefas;
