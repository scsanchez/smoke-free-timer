import React from "react";

interface Achievement {
  time: number;
  message: string;
}

interface AchievementsProps {
  timeElapsed: number;
}

const achievements: Achievement[] = [
  { time: 24 * 60 * 60 * 1000, message: "¡He alcanzado 1 día sin fumar!" },
  { time: 2 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 2 días sin fumar!" },
  { time: 3 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 3 días sin fumar!" },
  { time: 4 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 4 días sin fumar!" },
  { time: 5 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 5 días sin fumar!" },
  { time: 6 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 6 días sin fumar!" },
  { time: 7 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 1 semana sin fumar!" },
  { time: 14 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 2 semanas sin fumar!" },
  { time: 21 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 3 semanas sin fumar!" },
  { time: 30 * 24 * 60 * 60 * 1000, message: "¡He alcanzado 1 mes sin fumar!" },
  // Añade más logros según sea necesario
];

const Achievements: React.FC<AchievementsProps> = ({ timeElapsed }) => {
  const [achieved, setAchieved] = React.useState<string[]>([]);

  React.useEffect(() => {
    const newAchievements = achievements
      .filter((achievement) => timeElapsed >= achievement.time && !achieved.includes(achievement.message))
      .map((achievement) => achievement.message);

    if (newAchievements.length > 0) {
      setAchieved((prev) => [...new Set([...prev, ...newAchievements])]);
    }
  }, [timeElapsed, achieved]);

  return (
    <div className="achievements">
      <h3>Logros conseguidos:</h3>
      <ul className="no-bullets">
        {achieved.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;