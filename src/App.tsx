import "./App.css";
import React, { useState, useEffect } from "react";
import MotivosModal from "./components/Modal";
import Calendar from "./components/Calendar";
import Achievements from "./components/Achievements";
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(duration);
dayjs.extend(relativeTime);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const savedDate = localStorage.getItem("selectedDate");
    if (savedDate) {
      const date = dayjs(savedDate);
      calculateTimeElapsed(date);
    }
  }, []);

  const calculateTimeElapsed = (date: Dayjs) => {
    const now = dayjs();
    const diff = now.diff(date);
    const duration = dayjs.duration(diff);

    setTimeElapsed({
      years: duration.years(),
      months: duration.months(),
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
    });
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      localStorage.setItem("selectedDate", date.toISOString());
      calculateTimeElapsed(date);
    }
  };

  const totalMillisecondsElapsed =
    timeElapsed.years * 365 * 24 * 60 * 60 * 1000 +
    timeElapsed.months * 30 * 24 * 60 * 60 * 1000 +
    timeElapsed.days * 24 * 60 * 60 * 1000 +
    timeElapsed.hours * 60 * 60 * 1000;

  const formatTimeUnit = (value: number, singular: string, plural: string) => {
    return value === 1 ? ` ${value} ${singular}` : ` ${value} ${plural}`;
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Tiempo sin fumar</h1>
        <Calendar onDateChange={handleDateChange} />
        <h2>
          Llevas{" "}
          {timeElapsed.years > 0 &&
            formatTimeUnit(timeElapsed.years, "año", "años") + ","}
          {timeElapsed.months > 0 &&
            formatTimeUnit(timeElapsed.months, "mes", "meses") + ","}
          {timeElapsed.days > 0 &&
            formatTimeUnit(timeElapsed.days, "día", "días") + " y"}{" "}
          {timeElapsed.hours} horas.
        </h2>
        <Achievements timeElapsed={totalMillisecondsElapsed} />
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          Mostrar motivos
        </Button>
        <MotivosModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default App;
