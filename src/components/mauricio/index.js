import logo from "../../assets/images/logo.png";
import style from "./mauricio.module.css";

export function MauricioComponent() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <h1 className={style.text}>Olá, Juliana!</h1>
      </div>
    </>
  );
}
