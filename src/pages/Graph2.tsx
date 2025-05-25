import { useNavigate } from "react-router-dom";

export default function Graph1() {
    const navigate = useNavigate();
    return (
      <div className="p-6">
        <img src="/images/grafico1.png" alt="Gráfico 1" className="w-full h-auto mb-4" />
        <p>Este gráfico representa ... (tu explicación aquí)</p>
        <button onClick={() => navigate("/menu")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
        </button>
      </div>
    );
  }
  