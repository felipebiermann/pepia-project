import styles from "./styles.module.css";
import { Toaster, toast } from "react-hot-toast";
import happy from "../../assets/images/Happy.svg"


export function Adriano(){
    function ToastDass(){
        toast.success("Ir para tela do teste Humor", { position: "bottom-center" });    
    }
    return(        
            <div className={styles.container} onClick={ToastDass}>
                <Toaster />
                <div className={styles.text}>Como você está se<br/> sentindo hoje?</div>
                <div className={styles.time}>Preencha seu monitoramento de humor.</div>
                <div className={styles.happy}><img src={happy} /></div>
                <div className={styles.minutes}>2 Min.</div>
            </div>
            )
}
