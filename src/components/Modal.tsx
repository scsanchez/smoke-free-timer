import React from "react";

interface MotivosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MotivosModal: React.FC<MotivosModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
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
          11. Reducirás el riesgo de enfermedades pulmonares crónicas como el
          EPOC.
        </p>
        <p>12. Evitarás el envejecimiento prematuro de la piel.</p>
        <p>13. Disminuirás la tos y la flema matutina.</p>
        <p>
          14. Mejorarás tu capacidad pulmonar y podrás respirar más fácilmente.
        </p>
        <p>
          15. Tendrás dientes más blancos y evitarás las manchas en los dientes.
        </p>
        <p>16. Incrementarás tu fertilidad y salud reproductiva.</p>
        <p>17. Disminuirás el riesgo de complicaciones durante el embarazo.</p>
        <p>
          18. Protegerás a los niños de los efectos nocivos del humo de segunda
          mano.
        </p>
        <p>19. Mejorarás tu estado de ánimo y reducirás la ansiedad.</p>
        <p>20. Tendrás un sistema inmunológico más fuerte.</p>
        <p>21. Disfrutarás de una mejor calidad de sueño.</p>
        <p>22. Reducirás el riesgo de desarrollar diabetes tipo 2.</p>
        <p>23. Evitarás el daño a las encías y la pérdida de dientes.</p>
        <p>24. Mejorarás tu circulación sanguínea.</p>
        <p>25. Reducirás la posibilidad de padecer osteoporosis.</p>
        <p>26. Tendrás más control sobre tu vida sin depender del tabaco.</p>
        <p>27. Incrementarás tu capacidad para realizar actividades físicas.</p>
        <p>
          28. Disminuirás el riesgo de sufrir ataques cardíacos y accidentes
          cerebrovasculares.
        </p>
        <p>29. Evitarás el olor desagradable del humo en tu ropa y cabello.</p>
        <p>30. Tendrás más dinero disponible para invertir en tu bienestar.</p>
        <p>31. Evitarás daños a tus mascotas por el humo de segunda mano.</p>
        <p>
          32. Experimentarás una sensación de libertad al superar la adicción.
        </p>
        <p>
          33. Reducirás el riesgo de desarrollar enfermedades oculares como
          cataratas.
        </p>
        <p>34. Tendrás un entorno doméstico más limpio y saludable.</p>
        <p>
          35. Disminuirás la probabilidad de sufrir de presión arterial alta.
        </p>
        <p>
          36. Mejorarás tu función sexual y disfrutarás más de la intimidad.
        </p>
        <p>37. Evitarás el impacto negativo del tabaco en el medio ambiente.</p>
        <p>
          38. Protegerás tus pulmones del daño causado por los químicos en el
          tabaco.
        </p>
        <p>39. Disminuirás el riesgo de padecer infecciones respiratorias.</p>
        <p>
          40. Tendrás una mayor capacidad para concentrarte y rendir en el
          trabajo.
        </p>
        <p>41. Reducirás el riesgo de sufrir úlceras estomacales.</p>
        <p>
          42. Protegerás tu hogar de incendios causados por cigarrillos
          encendidos.
        </p>
        <p>43. Mejorarás tu hidratación, evitando la sequedad en la piel.</p>
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
          50. Sentirás orgullo y satisfacción por tomar el control de tu salud.
        </p>
      </div>
    </div>
  );
};

export default MotivosModal;
