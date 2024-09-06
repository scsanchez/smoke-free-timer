import React from "react";

interface Achievement {
  time: number;
  message: string;
}

interface AchievementsProps {
  timeElapsed: number;
}

const achievements: Achievement[] = [
  { time: 24 * 60 * 60 * 1000, message: "¡Has alcanzado 1 día sin fumar!" },
  {
    time: 2 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 2 días sin fumar!",
  },
  {
    time: 3 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 3 días sin fumar!",
  },
  {
    time: 4 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 5 días sin fumar!",
  },
  {
    time: 6 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 6 días sin fumar!",
  },
  {
    time: 7 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 1 semana sin fumar!",
  },
  {
    time: 14 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 2 semanas sin fumar!",
  },
  {
    time: 21 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 3 semanas sin fumar!",
  },
  {
    time: 30 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 1 mes sin fumar!",
  },
  {
    time: 60 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 2 meses sin fumar!",
  },
  {
    time: 90 * 24 * 60 * 60 * 1000,
    message: "¡Has alcanzado 3 meses sin fumar!",
  },
  // Añade más logros según sea necesario
];

const Achievements: React.FC<AchievementsProps> = ({ timeElapsed }) => {
  const [latestAchievement, setLatestAchievement] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    const recentAchievement = achievements
      .filter((achievement) => timeElapsed >= achievement.time)
      .sort((a, b) => b.time - a.time)[0]; // Ordenar por tiempo y tomar el más reciente

    if (recentAchievement) {
      setLatestAchievement(recentAchievement.message);
    }
  }, [timeElapsed]);

  return (
    <div>
      {latestAchievement ? (
        <p>{latestAchievement}</p>
      ) : (
        <p>No hay logros alcanzados aún.</p>
      )}
    </div>
  );
};

export default Achievements;
