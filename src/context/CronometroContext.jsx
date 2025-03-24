import { createContext, useState, useEffect, useRef } from "react";
import beepSound from "../assets/sons/beep.mp3";

export const CronometroContext = createContext();

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

const CronometroProvider = ({ children }) => {
  const musicaRef = useRef(null);
  const beepRef = useRef(new Audio(beepSound)); // Criando um áudio para o beep

  // Estado para controlar o modo atual e o tempo restante
  const [modoAtual, setModoAtual] = useState(modos[0]);
  const [tempoRestante, setTempoRestante] = useState(modoAtual.duracao);
  const [emExecucao, setEmExecucao] = useState(false); // Para saber se o cronômetro está rodando
  const [musicaTocando, setMusicaTocando] = useState(false);

  useEffect(() => {
    let intervalo;

    if (emExecucao && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
      beepRef.current.play();
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
  }, [emExecucao, tempoRestante]);

  // Função para iniciar/pausar o cronômetro
  const alternarCronometro = () => {
    setEmExecucao((prev) => !prev);
    if (!emExecucao) {
      controlarMusica(); // Tocar música quando o cronômetro iniciar
    } else {
      musicaRef.current.pause(); // Pausar a música quando o cronômetro for pausado
    }
  };

  // Função para alternar entre os modos
  const selecionarModo = (novoModo) => {
    setModoAtual(novoModo);
    setTempoRestante(novoModo.duracao);
    setEmExecucao(false);
    musicaRef.current.pause(); // Pausar a música quando mudar de modo
  };

  const controlarMusica = () => {
    if (musicaRef.current) {
      musicaRef.current.play(); // Inicia a música
      setMusicaTocando(true); // Estado da música
    }
  };

  const pausarMusica = () => {
    if (musicaRef.current) {
      musicaRef.current.pause(); // Pausa a música
      setMusicaTocando(false); // Estado da música
    }
  };

  return (
    <CronometroContext.Provider
      value={{
        modos,
        modoAtual,
        tempoRestante,
        emExecucao,
        musicaTocando,
        alternarCronometro,
        selecionarModo,
        controlarMusica,
        pausarMusica,
        musicaRef,
      }}
    >
      {children}
    </CronometroContext.Provider>
  );
};

export default CronometroProvider;
