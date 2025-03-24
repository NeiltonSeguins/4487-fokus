import styles from "../styles.module.css";

const CampoTexto = ({ etiqueta, placeholder, ...props }) => {
  return (
    <div className={styles["form-add-task__field"]} {...props}>
      <label className={styles["form-add-task__label"]}>{etiqueta}</label>
      <textarea
        required
        rows="4"
        className={styles["form-add-task__textarea"]}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default CampoTexto;
