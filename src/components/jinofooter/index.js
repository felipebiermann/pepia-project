import home from "../../assets/images/foothome.png";
import search from "../../assets/images/footsearch.png";
import humor from "../../assets/images/foothumor.png";
import message from "../../assets/images/footmessage.png";
import profile from "../../assets/images/footprofile.png";
import style from "./style.module.css";

export function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.singleblock}>
        <img src={home} alt="home" />
        <p className={style.text}>Início</p>
      </div>
      <div className={style.singleblock}>
        <img src={search} alt="search" />
        <p className={style.text}>Buscar</p>
      </div>
      <div className={style.singleblock}>
        <img src={humor} alt="humor" />
        <p className={style.text}>Humor</p>
      </div>
      <div className={style.singleblock}>
        <img src={message} alt="message" />
        <p className={style.text}>Mensagens</p>
      </div>
      <div className={style.singleblock}>
        <img src={profile} alt="profile" />
        <p className={style.text}>Perfil</p>
      </div>
    </div>
  );
}
