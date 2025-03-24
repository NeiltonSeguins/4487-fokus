import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";

export default function BotoesModos() {
  const modo = [
    {
      id: "foco",
      nome: "Foco",
      frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
      tempoInicialEmSegundos: 25,
    },
    {
      id: "pausa_curta",
      nome: "Pausa curta",
      frase: ["Que tal dar uma respirada?", "Faça uma pausa curta"],
      tempoInicialEmSegundos: 5,
    },
    {
      id: "pausa_longa",
      nome: "Pausa longa",
      frase: ["Hora de voltar a superfície", "Faça uma pausa longa."],
      tempoInicialEmSegundos: 15,
    },
  ];

  return (
    <ul className={styles["cronometer-modes"]}>
      {modo.map((m) => (
        <li key={m.id}>
          <BotaoModo>{m.nome}</BotaoModo>
        </li>
      ))}
    </ul>
  );
}
