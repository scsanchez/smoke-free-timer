import React, { useState } from "react";
import Achievements from "./components/Achievements";
import Button from "@mui/material/Button";
import MotivosModal from "./components/Modal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeElapsed = {
    days: 5,
    hours: 12,
    minutes: 30,
  };
  const totalMillisecondsElapsed = timeElapsed.days * 24 * 60 * 60 * 1000 + timeElapsed.hours * 60 * 60 * 1000 + timeElapsed.minutes * 60 * 1000;

  return (
    <div className="container">
      <div className="box">
        <h1>Tiempo sin fumar</h1>
        <h2>
          Han pasado {timeElapsed.days} días, {timeElapsed.hours} horas y{" "}
          {timeElapsed.minutes} minutos.
        </h2>
        <br />
        <Achievements timeElapsed={totalMillisecondsElapsed} />
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          Mostrar motivos
        </Button>
      </div>
      <MotivosModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;