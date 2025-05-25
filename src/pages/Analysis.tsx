import { useNavigate } from "react-router-dom";

export default function Analysis() {
    const navigate = useNavigate();
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="/images/matriz_correlacion.png" alt="Matriz de Correlación" />
          <img src="/images/matriz_confusion.png" alt="Matriz de Confusión" />
        </div>
        <p>Aquí coloco mis conclusiones y análisis del modelo de predicción...</p>
        <button onClick={() => navigate("/menu")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
        </button>
      </div>
    );
  }
  