import { Html, useProgress } from "@react-three/drei";
import "../utils/Loader.css"; // Archivo CSS para estilos de la rueda giratoria

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="loader-wrapper">
        <div className="loader"></div>

      </div>
    </Html>
  );
};

export default Loader;
