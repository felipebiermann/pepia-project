import home from "../../assets/images/foothome.png";
import search from "../../assets/images/footsearch.png";
import humor from "../../assets/images/foothumor.png";
import message from "../../assets/images/footmessage.png";
import profile from "../../assets/images/footprofile.png";
import style from "./style.module.css";
import { Toaster, toast } from "react-hot-toast";

export function Footer() {
  function ToastHome() {
    toast.success("Para home", { position: "bottom-center" });
  }
  function ToastSearch() {
    toast.success("Para searchbar", { position: "bottom-center" });
  }
  function ToastHumor() {
    toast.success("Para humor", { position: "bottom-center" });
  }
  function ToastMessage() {
    toast.success("Para messages", { position: "bottom-center" });
  }
  function ToastProfile() {
    toast.success("Para profile", { position: "bottom-center" });
  }

  return (
    <div className={style.footer}>
      <Toaster />
      <div className={style.singleblock} onClick={ToastHome}>
        <img src={home} alt="home" />
        <p className={style.text}>Início</p>
      </div>
      <div className={style.singleblock} onClick={ToastSearch}>
        <img src={search} alt="search" />
        <p className={style.text}>Buscar</p>
      </div>
      <div className={style.singleblock} onClick={ToastHumor}>
        <img src={humor} alt="humor" />
        <p className={style.text}>Humor</p>
      </div>
      <div className={style.singleblock} onClick={ToastMessage}>
        <img src={message} alt="message" />
        <p className={style.text}>Mensagens</p>
      </div>
      <div className={style.singleblock} onClick={ToastProfile}>
        <img src={profile} alt="profile" />
        <p className={style.text}>Perfil</p>
      </div>
    </div>
  );
}
