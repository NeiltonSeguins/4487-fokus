import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";
import { useContext } from "react";
import { CronometroContext } from "../../../context/CronometroContext";

const BotoesModos = () => {
  const { modos, modoAtual, selecionarModo } = useContext(CronometroContext);
  return (
    <ul className={styles["cronometer-modes"]}>
      {modos.map((m) => (
        <li key={m.id}>
          <BotaoModo
            ativo={m.id === modoAtual.id} // Define se o botão está ativo
            onClick={() => selecionarModo(m)} // Altera o modo selecionado
          >
            {m.nome}
          </BotaoModo>
        </li>
      ))}
    </ul>
  );
};

export default BotoesModos;
