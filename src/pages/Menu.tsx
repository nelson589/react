import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-4 h-screen p-8 bg-gray-100">
      <button onClick={() => navigate("/graph1")} className="bg-white p-6 shadow rounded-lg text-center">
        Gráfico 1
      </button>
      <button onClick={() => navigate("/graph2")} className="bg-white p-6 shadow rounded-lg text-center">
        Gráfico 2
      </button>
      <button onClick={() => navigate("/analysis")} className="bg-white p-6 shadow rounded-lg text-center">
        Análisis
      </button>
      <button onClick={() => navigate("/team")} className="bg-white p-6 shadow rounded-lg text-center">

      <button onClick={() => navigate("/predict")} className="bg-white p-6 shadow rounded-lg text-center">
        Predicción
      </button>


        Integrantes
      </button>
      <button onClick={() => navigate("/")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
        </button>
    </div>
  );
}
