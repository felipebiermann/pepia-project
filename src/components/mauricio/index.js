import logo from "../../assets/images/logo.png";
import style from "./mauricio.module.css";

export function MauricioComponent() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <p className={style.text}><strong>Olá, Juliana!</strong></p>
      </div>
    </>
  );
}
