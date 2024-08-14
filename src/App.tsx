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
  }, [achieved, startDate]);

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
        <button onClick={() => setIsModalOpen(true)}>Mostrar motivos</button>
        <br />
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Motivos por los cuales dejar de fumar</h2>
            <p>1. Mejorarás tu salud respiratoria y cardiovascular.</p>
            <p>2. Reducirás el riesgo de enfermedades graves como el cáncer.</p>
            <p>3. Ahorrarás dinero que solías gastar en cigarrillos.</p>
            <p>4. Tendrás una piel más saludable y un aspecto más joven.</p>
            <p>5. Mejorarás tu sentido del gusto y del olfato.</p>
            <p>6. Protegerás la salud de quienes te rodean.</p>
            <p>7. Aumentarás tu esperanza y calidad de vida.</p>
            <p>8. Tendrás más energía y mejor rendimiento físico.</p>
            <p>9. Eliminarás el mal aliento y mejorarás tu higiene bucal.</p>
            <p>10. Darás un buen ejemplo a quienes te observan.</p>
            <p>
              11. Reducirás el riesgo de enfermedades pulmonares crónicas como
              el EPOC.
            </p>
            <p>12. Evitarás el envejecimiento prematuro de la piel.</p>
            <p>13. Disminuirás la tos y la flema matutina.</p>
            <p>
              14. Mejorarás tu capacidad pulmonar y podrás respirar más
              fácilmente.
            </p>
            <p>
              15. Tendrás dientes más blancos y evitarás las manchas en los
              dientes.
            </p>
            <p>16. Incrementarás tu fertilidad y salud reproductiva.</p>
            <p>
              17. Disminuirás el riesgo de complicaciones durante el embarazo.
            </p>
            <p>
              18. Protegerás a los niños de los efectos nocivos del humo de
              segunda mano.
            </p>
            <p>19. Mejorarás tu estado de ánimo y reducirás la ansiedad.</p>
            <p>20. Tendrás un sistema inmunológico más fuerte.</p>
            <p>21. Disfrutarás de una mejor calidad de sueño.</p>
            <p>22. Reducirás el riesgo de desarrollar diabetes tipo 2.</p>
            <p>23. Evitarás el daño a las encías y la pérdida de dientes.</p>
            <p>24. Mejorarás tu circulación sanguínea.</p>
            <p>25. Reducirás la posibilidad de padecer osteoporosis.</p>
            <p>
              26. Tendrás más control sobre tu vida sin depender del tabaco.
            </p>
            <p>
              27. Incrementarás tu capacidad para realizar actividades físicas.
            </p>
            <p>
              28. Disminuirás el riesgo de sufrir ataques cardíacos y accidentes
              cerebrovasculares.
            </p>
            <p>
              29. Evitarás el olor desagradable del humo en tu ropa y cabello.
            </p>
            <p>
              30. Tendrás más dinero disponible para invertir en tu bienestar.
            </p>
            <p>
              31. Evitarás daños a tus mascotas por el humo de segunda mano.
            </p>
            <p>
              32. Experimentarás una sensación de libertad al superar la
              adicción.
            </p>
            <p>
              33. Reducirás el riesgo de desarrollar enfermedades oculares como
              cataratas.
            </p>
            <p>34. Tendrás un entorno doméstico más limpio y saludable.</p>
            <p>
              35. Disminuirás la probabilidad de sufrir de presión arterial
              alta.
            </p>
            <p>
              36. Mejorarás tu función sexual y disfrutarás más de la intimidad.
            </p>
            <p>
              37. Evitarás el impacto negativo del tabaco en el medio ambiente.
            </p>
            <p>
              38. Protegerás tus pulmones del daño causado por los químicos en
              el tabaco.
            </p>
            <p>
              39. Disminuirás el riesgo de padecer infecciones respiratorias.
            </p>
            <p>
              40. Tendrás una mayor capacidad para concentrarte y rendir en el
              trabajo.
            </p>
            <p>41. Reducirás el riesgo de sufrir úlceras estomacales.</p>
            <p>
              42. Protegerás tu hogar de incendios causados por cigarrillos
              encendidos.
            </p>
            <p>
              43. Mejorarás tu hidratación, evitando la sequedad en la piel.
            </p>
            <p>
              44. Incrementarás tu resistencia durante actividades físicas como
              correr o caminar.
            </p>
            <p>45. Evitarás la ansiedad por la necesidad constante de fumar.</p>
            <p>46. Mejorarás la salud de tus uñas y cabello.</p>
            <p>47. Disminuirás las arrugas y líneas finas en tu rostro.</p>
            <p>48. Experimentarás menos dolores de cabeza y migrañas.</p>
            <p>
              49. Evitarás la exposición a más de 4,000 químicos tóxicos en los
              cigarrillos.
            </p>
            <p>
              50. Sentirás orgullo y satisfacción por tomar el control de tu
              salud.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
