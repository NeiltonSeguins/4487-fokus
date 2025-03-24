import styles from "./styles.module.css";
import useCronometroContext from "../../../hooks/useCronometroContext";

export default function Timer() {
  const { tempoRestante } = useCronometroContext();
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  return (
    <div className={styles["cronometer-timer"]}>
      {minutos}:{segundos < 10 ? `0${segundos}` : segundos}
    </div>
  );
}
