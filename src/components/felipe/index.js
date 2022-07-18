import style from "./felipe.module.css";
import Lupa from "../../assets/images/Search.png";

export function FelipeCard() {
  return (
    <>
      <div className={style.borda}>
        <span className={style.texto}>
          {" "}
          Encontre sua psicóloga(o) perfeita!
        </span>
        <img className={style.lupa} src={Lupa} />
      </div>
    </>
  );
}
