import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";

const BotaoCronometro = ({ emExecucao, onClick }) => {
  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]} onClick={onClick}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={emExecucao ? pauseImg : play_arrowImg}
          alt=""
        />
        <span>{emExecucao ? "Pausar" : "Começar"}</span>
      </button>
    </div>
  );
};

export default BotaoCronometro;
