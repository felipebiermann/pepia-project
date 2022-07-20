import image1 from "../../assets/images/carousel/Wellness App (6) 1.svg";
import image2 from "../../assets/images/carousel/49 1.svg";
import image3 from "../../assets/images/carousel/50 2.svg";
import styles from "./styles.module.css";
import { toast, Toaster } from "react-hot-toast";

export function CarouselComponent() {
  function psicologiaToast() {
    toast.success("O que é Psicologia");
  }

  function ansiedadeToast() {
    toast.success("Crise de Ansiedade");
  }

  function depressaoToast() {
    toast.success("Será que estou com Depressão?");
  }

  return (
    <>
      <Toaster />
      <div className={styles.carouselContainer}>
        <div>
          <h2>Veja também:</h2>
        </div>
        <div
          // className="d-flex flex-row flex-nowrap overflow-auto gap-5"
          // style={{ "overflow-x": "hidden" }}
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "nowrap",
            overflow: "auto",
            // overflowX: "hidden",
            gap: "10px",
          }}
        >
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
              <img
                src={image1}
                alt="O que é Psicologia"
                onClick={psicologiaToast}
              />
              <h3>O que é Psicologia</h3>
              <p>por Pepia App</p>
            </a>
          </div>
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
              <img
                src={image2}
                alt="Crise de Ansiedade"
                onClick={ansiedadeToast}
              />
              <h3>Crise de Ansiedade</h3>
              <p>por Pepia App</p>
            </a>
          </div>
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
              <img
                src={image3}
                alt="Será que estou com depressão?"
                onClick={depressaoToast}
              />
              <h3>Será que estou<br/>com depressão?</h3>
              <p>por Pepia App</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
