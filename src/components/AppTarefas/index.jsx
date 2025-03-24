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

  // Função para deletar uma tarefa
  function deletarTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  // Função para deletar todas as tarefas
  function deletarTodasTarefas() {
    setTarefas([]);
  }

  function deletarTarefasConcluidas() {
    setTarefas(tarefas.filter((tarefa) => !tarefa.concluida));
  }

  // Função para marcar uma tarefa como concluída
  function marcarComoConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  return (
    <section className={styles["tasks"]}>
      <div className={styles["tasks__task-content"]}>
        <CabecalhoTarefas
          deletarTodasTarefas={deletarTodasTarefas}
          deletarTarefasConcluidas={deletarTarefasConcluidas}
        />
        <ListaTarefas
          tarefas={tarefas}
          deletarTarefa={deletarTarefa}
          marcarComoConcluida={marcarComoConcluida}
        />
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
