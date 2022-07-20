import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import style from "./App.css";

import { TulioCard } from "./components/tulio/index";
import { Footer } from "./components/jinofooter/index";
import { RicardoCard } from "./components/ricardo/index";
import { FelipeCard } from "./components/felipe/index";
import { Flavia } from "./components/Flavia/index";
import { MauricioComponent } from "./components/mauricio/index";
import { CarouselComponent } from "./components/caio/index";
import { Adriano } from "./components/adriano/index";

function App() {
  return (
    <div className="container">
      <div>
        <MauricioComponent />
        <RicardoCard />
        <Flavia />
        <div className="cards">
          <TulioCard />
          <FelipeCard />
        </div>
        <Adriano />
        <CarouselComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
