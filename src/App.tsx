import { useState, useEffect } from "react";
import "./App.css";

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
}

const achievements = [
  { time: 24 * 60 * 60 * 1000, message: "¡He alcanzado 1 día sin fumar!" },
  { time: 2 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 2 días sin fumar!" },
  { time: 3 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 3 días sin fumar!" },
  { time: 4 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 4 días sin fumar!" },
  { time: 5 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 5 días sin fumar!" },
  { time: 6 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 6 días sin fumar!" },
  {
    time: 7 * 24 * 60 * 60 * 1000,
    message: "¡He alcanzado 1 semana sin fumar!",
  },
  {
    time: 14 * 24 * 60 * 60 * 1000,
    message: "¡He alcanzado 2 semanas sin fumar!",
  },
  {
    time: 21 * 24 * 60 * 60 * 1000,
    message: "¡He alcanzado 3 semanas sin fumar!",
  },
  { time: 30 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 1 mes sin fumar!" },
  // Añade más logros según sea necesario
];

function App() {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const [achieved, setAchieved] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const quitDate = new Date(2024, 7, 11, 11, 0, 0, 0); // 11 de agosto de 2024 a las 11 am

    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - quitDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);

      setTimeElapsed({ days, hours, minutes });

      // Verifica logros
      achievements.forEach((achievement) => {
        if (
          difference >= achievement.time &&
          !achieved.includes(achievement.message)
        ) {
          setAchieved((prev) => [...prev, achievement.message]);
        }
      });
    };

    updateTimer(); // Llama a updateTimer inmediatamente para establecer el estado inicial
    const intervalId = setInterval(updateTimer, 60000); // Actualiza cada minuto

    return () => clearInterval(intervalId);
  }, [achieved]);

  return (
    <div className="container">
      <div className="box">
        <h1>Tiempo sin fumar</h1>
        <h2>
          Han pasado {timeElapsed.days} días, {timeElapsed.hours} horas y{" "}
          {timeElapsed.minutes} minutos.
        </h2>
        <br />
        <div className="achievements">
          <h3>Logros conseguidos:</h3>
          <ul className="no-bullets">
            {achieved.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => setIsModalOpen(true)}>Mostrar motivos</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Motivos por los cuales dejar de fumar</h2>
            <p>Aquí puedes listar los motivos...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
