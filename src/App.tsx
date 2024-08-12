import { useState, useEffect } from "react";
import "./App.css";

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const achievements = [
  { time: 60 * 60 * 1000, message: "¡He alcanzado 1 hora sin fumar!" },
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
    seconds: 0,
  });

  const [achieved, setAchieved] = useState<string[]>([]);

  useEffect(() => {
    const quitDate = new Date();
    quitDate.setDate(quitDate.getDate() - 1);
    quitDate.setHours(11, 0, 0, 0);

    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - quitDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });

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

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [achieved]);

  return (
    <div className="container">
      <div className="box">
        <h1>Tiempo sin fumar</h1>
        <p>
          Han pasado {timeElapsed.days} días, {timeElapsed.hours} horas,{" "}
          {timeElapsed.minutes} minutos y {timeElapsed.seconds} segundos.
        </p>
        <br />
        <div className="achievements">
          <h2>Logros conseguidos</h2>
          <ul className="no-bullets">
            {achieved.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
