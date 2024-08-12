import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    // Fecha y hora en la que dejaste de fumar (11 am de ayer)
    const quitDate = new Date();
    quitDate.setDate(quitDate.getDate() - 1); // Ayer
    quitDate.setHours(11, 0, 0, 0); // 11 am

    const updateTimer = () => {
      const now = new Date();
      const difference = now - quitDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    // Actualiza el temporizador cada segundo
    const intervalId = setInterval(updateTimer, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Tiempo sin fumar</h1>
          <p>
            Han pasado {timeElapsed.days} días, {timeElapsed.hours} horas,{" "}
            {timeElapsed.minutes} minutos y {timeElapsed.seconds} segundos.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
