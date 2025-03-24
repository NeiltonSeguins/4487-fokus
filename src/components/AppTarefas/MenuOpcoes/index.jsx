import styles from "../styles.module.css";
import moreImg from "/src/assets/imgs/more.svg";
import Botao from "../Botao";

const MenuOpcoes = ({ opcoes }) => {
  return (
    <div className={styles["dropdown"]}>
      <Botao icone={moreImg} className={styles["dropdown__button-more"]} />

      <ul className={styles["dropdown__ul"]}>
        {opcoes.map((opcao, index) => (
          <li key={index} className={styles["dropdown__li"]}>
            <Botao
              icone={opcao.icone}
              className={styles["dropdown__button"]}
              id="btn-remover-concluidas"
            >
              {opcao.rotulo}
            </Botao>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOpcoes;
