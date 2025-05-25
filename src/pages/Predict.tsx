import { useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

interface PredictionResult {
  ventas_altas: number;
  probabilidad: number;
}

export default function Predict() {
  const [year, setYear] = useState<string>("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/proceso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ year_of_release: parseInt(year) })
      });

      if (!response.ok) {
        throw new Error("Error al consultar la API");
      }

      const data: PredictionResult = await response.json();
      setResult(data);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Predicción de Ventas</h1>

      <input
        type="number"
        placeholder="Año de lanzamiento"
        className="border p-2 mb-4 w-full"
        value={year}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Predecir
      </button>

      {result && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <p><strong>¿Ventas altas?:</strong> {result.ventas_altas === 1 ? "Sí" : "No"}</p>
          <p><strong>Probabilidad:</strong> {(result.probabilidad * 100).toFixed(2)}%</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={() => navigate("/menu")}
        className="bg-white p-6 shadow rounded-lg text-center"
      >
        Volver
      </button>
    </div>
  );
}
