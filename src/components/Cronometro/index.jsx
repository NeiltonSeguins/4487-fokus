import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useContext } from "react";
import { CronometroContext } from "../../context/CronometroContext";

export default function Cronometro() {
  const { musicaRef } = useContext(CronometroContext);

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />
      <Timer />
      <SwitchMusica ref={musicaRef} />
      <BotaoCronometro />
    </div>
  );
}
