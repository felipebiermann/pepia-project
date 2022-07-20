import styles from "./index.module.css";
import backimage from "../../assets/images/bem-vinde-img.png";
import { Toaster, toast } from "react-hot-toast";

export function RicardoCard() {
  function ToastMais() {
    toast.success("Para Saiba Mais", { position: "top-center" });
  }

  return (
    <>
      <Toaster />
      <div className={styles.border}>
        <div className={styles.text1}>
          <p>Seja bem-vinde!</p>
        </div>
        <div className={styles.text2}>
          <p>Clique aqui para saber um pouco mais sobre o app.</p>
        </div>
      </div>
    </>
  );
}
