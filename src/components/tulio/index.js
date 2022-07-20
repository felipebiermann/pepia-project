import style from "./tulio.module.css";
import dicasImg from "../../assets/images/dicas-img.png";
import { Toaster, toast } from "react-hot-toast";

export function TulioCard() {
  function Toast() {
    toast.success("Busque seu Psicologo (a)", { position: "top-center" });
  }

  return (
    <>
      <div className={style.card} onClick={Toast}>
      <Toaster/>
        <p className={style.cardText}>
          <strong>Dicas para buscar o psicólogo (a) ideal!</strong>
        </p>
        <img src={dicasImg} alt="dicas" className={style.cardImg} />
      </div>
    </>
  );
}
