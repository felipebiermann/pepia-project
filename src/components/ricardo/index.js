import styles from "./index.module.css";
import backimage from "../../assets/images/bem-vinde-img.png";

export function RicardoCard() {
  return (
    <>
      <div className={styles.border}>
        <div className={styles.text1}>
          <h2>Seja bem-vinde!</h2>
        </div>
        <div className={styles.text2}>
          <h3>Clique aqui para saber um pouco mais sobre o app.</h3>
        </div>
      </div>
    </>
  );
}
