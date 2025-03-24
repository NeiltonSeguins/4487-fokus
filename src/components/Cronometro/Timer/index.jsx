import { useContext } from "react";
import styles from "./styles.module.css";
import { CronometroContext } from "../../../context/CronometroContext";

export default function Timer() {
  const { tempoRestante } = useContext(CronometroContext);
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  return (
    <div className={styles["cronometer-timer"]}>
      {minutos}:{segundos < 10 ? `0${segundos}` : segundos}
    </div>
  );
}
