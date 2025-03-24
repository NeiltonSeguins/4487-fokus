import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";

const BotoesModos = ({ modos, modoAtual, onModoSelecionado }) => {
  return (
    <ul className={styles["cronometer-modes"]}>
      {modos.map((m) => (
        <li key={m.id}>
          <BotaoModo
            ativo={m.id === modoAtual.id} // Define se o botão está ativo
            onClick={() => onModoSelecionado(m)} // Altera o modo selecionado
          >
            {m.nome}
          </BotaoModo>
        </li>
      ))}
    </ul>
  );
};

export default BotoesModos;
