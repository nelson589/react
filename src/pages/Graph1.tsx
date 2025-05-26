import { useNavigate } from "react-router-dom";

export default function Graph1() {
    const navigate = useNavigate();
    return (
      <div className="p-6">
        <img src="src\assets\images\Martriz.jpeg" alt="Gráfico 1" className="w-full h-auto mb-4" />
        <p>Con esta matriz se puede ver el desempeño del modelo al ver como se clasifican las variables de respuesta, teniendo al final el auc de la curva ROC</p>
        <button onClick={() => navigate("/menu")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
      </button>
      </div>
    );
  }
  
