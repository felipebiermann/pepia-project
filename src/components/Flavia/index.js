import styles from "./styles.module.css";
import { Toaster, toast } from "react-hot-toast";


export function Flavia(){
    function ToastDass(){
        toast.success("Ir para tela do teste DASS", { position: "bottom-center" });    
    }
    return(        
            <div className={styles.container} onClick={ToastDass}>
                <Toaster />
                <div className={styles.text}>Preencha seu teste DASS para seu acompanhamento ficar mais completo.</div>
                <div className={styles.time}>5 Min.</div>
            </div>
            )
}
