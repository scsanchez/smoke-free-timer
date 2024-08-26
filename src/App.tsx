import { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import MotivosModal from "./components/Modal";

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
  const [startDate, setStartDate] = useState<string>(() => {
    const savedDate = localStorage.getItem("quitDate");
    return savedDate ? savedDate : "2024-08-11T11:00";
  });

  useEffect(() => {
    const quitDate = new Date(startDate);
  
    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - quitDate.getTime();
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
  
      setTimeElapsed({ days, hours, minutes });
  
      // Verifica logros
      setAchieved((prevAchieved) => {
        const newAchievements = achievements
          .filter((achievement) => difference >= achievement.time && !prevAchieved.includes(achievement.message))
          .map((achievement) => achievement.message);
  
        return [...prevAchieved, ...newAchievements];
      });
    };
  
    updateTimer(); // Llama a updateTimer inmediatamente para establecer el estado inicial
    const intervalId = setInterval(updateTimer, 60000); // Actualiza cada minuto
  
    return () => clearInterval(intervalId);
  }, [startDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setStartDate(newDate);
    localStorage.setItem("quitDate", newDate);
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Tiempo sin fumar</h1>
        <label htmlFor="start-date">Selecciona la fecha de inicio: </label>
        <input
          type="datetime-local"
          id="start-date"
          value={startDate}
          onChange={handleDateChange}
        />
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
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          Mostrar motivos
        </Button>
        <br />
      </div>
      <MotivosModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
