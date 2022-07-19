import style from "./felipe.module.css";
import Lupa from "../../assets/images/Search.png";
import { Toaster, toast } from "react-hot-toast";

export function FelipeCard() {
  function ToastLupa() {
    toast.success("Para Pesquisar", { position: "top-center" });
  }

  return (
    <>
      <Toaster />
      <div className={style.borda}>
        <span className={style.texto}>
          {" "}
          Encontre sua psicóloga(o) perfeita!
        </span>
        <div onClick={ToastLupa}>
          <img className={style.lupa} src={Lupa} />
        </div>
      </div>
    </>
  );
}
