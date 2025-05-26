import { useNavigate } from "react-router-dom";

export default function Graph1() {
    const navigate = useNavigate();
    return (
      <div className="p-6">
        <img src="src\assets\images\Curva_ROC.jpeg" alt="Gráfico 1" className="w-full h-auto mb-4" />
        <p>La cruva ROC ayuda a entender que tan bien se calculan las predicciones y el desempeño del modelo mientras que se desarrolla con los datos</p>
        <button onClick={() => navigate("/menu")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
        </button>
      </div>
    );
  }
  