import styles from "./styles.module.css";
export default function BotaoModo({ children }) {
  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${styles["cronometer-modes__button--active"]}
      `}
    >
      {children}
    </button>
  );
}
