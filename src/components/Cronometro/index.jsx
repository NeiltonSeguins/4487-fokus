import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useEffect, useState } from "react";

const modos = [
  {
    id: "foco",
    nome: "Foco",
    duracao: 25, // em minutos
  },
  {
    id: "pausa_curta",
    nome: "Pausa curta",
    duracao: 5, // em minutos
  },
  {
    id: "pausa_longa",
    nome: "Pausa longa",
    duracao: 15, // em minutos
  },
];

export default function Cronometro() {
  // Estado para controlar o modo atual e o tempo restante
  const [modoAtual, setModoAtual] = useState(modos[0]);
  const [tempoRestante, setTempoRestante] = useState(modoAtual.duracao);
  const [emExecucao, setEmExecucao] = useState(false); // Para saber se o cronômetro está rodando

  useEffect(() => {
    let intervalo;

    if (emExecucao && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
      // Reseta o timer ao atingir 0 e muda de modo
      setModoAtual((prev) => {
        const modoAtualIndex = modos.findIndex((modo) => modo.id === prev.id);
        const proximoModo = modos[(modoAtualIndex + 1) % modos.length]; // Avança para o próximo modo ou volta ao primeiro
        setTempoRestante(proximoModo.duracao); // Reseta o tempo do novo modo
        return proximoModo;
      });
      setEmExecucao(false); // Para o cronômetro automaticamente quando o tempo acabar
    }

    return () => clearInterval(intervalo);
  }, [emExecucao, tempoRestante, modoAtual]);

  // Função para iniciar/pausar o cronômetro
  const alternarCronometro = () => {
    setEmExecucao((prev) => !prev);
  };

  // Função para alternar entre os modos
  const selecionarModo = (novoModo) => {
    setModoAtual(novoModo);
    setTempoRestante(novoModo.duracao);
    setEmExecucao(false);
  };

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos modos={modos} modoAtual={modoAtual} onModoSelecionado={selecionarModo} />
      <Timer tempoRestante={tempoRestante} />
      <SwitchMusica />
      <BotaoCronometro emExecucao={emExecucao} onClick={alternarCronometro} />
    </div>
  );
}
