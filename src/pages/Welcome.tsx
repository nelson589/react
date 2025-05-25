import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Welcome() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (name && email) {
      navigate("/menu");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/escudo.jpg')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
        <p className="mb-2">Trabajo Final - Proyecto Analítica</p>
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 w-full mb-2"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={handleContinue}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
