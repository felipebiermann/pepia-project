import style from "./Tulio.module.css";
import dicasImg from "../../assets/images/dicas-img.png";

export function TulioCard() {
  return (
    <>
      <div className={style.card}>
        <p className={style.cardText}>
          <strong>Dicas para buscar o psicólogo (a) ideal!</strong>
        </p>
        <img src={dicasImg} alt="dicas" className={style.cardImg} />
      </div>
    </>
  );
}
