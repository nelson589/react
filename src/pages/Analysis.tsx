import { useNavigate } from "react-router-dom";

export default function Analysis() {
    const navigate = useNavigate();
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="src/assets/images/Martriz.jpeg" alt="Matriz" />
          <img src="src/assets/images/Curva_ROC.jpeg" alt="Curva Roc" />
        </div>
        <p>Conclusiones del modelo Gaussian Naive Bayes (GaussianNB)
        1. Rendimiento general:
        El modelo GaussianNB mostró un desempeño modesto al predecir las ventas de videojuegos. Esto es consistente con la naturaleza de este algoritmo,  
        ya que asume independencia entre las variables predictoras y una distribución gaussiana de los datos.

        2. Fortalezas:
        - Fue capaz de capturar patrones generales cuando las características tenían relaciones lineales con las ventas.
        - Su bajo tiempo de entrenamiento lo hace ideal para prototipado rápido y escenarios donde se requiere eficiencia computacional.

        3. Limitaciones:
        - Dado que las características como "plataforma" y "desarrolladora" pueden tener interacciones complejas y no lineales, el modelo GaussianNB no logró capturar estas relaciones con precisión.
        - La suposición de independencia entre variables no se ajusta bien a datos de videojuegos, donde muchas variables están altamente correlacionadas (por ejemplo, plataforma y calificación).

        4. Aplicabilidad:
        Aunque no fue el mejor modelo, GaussianNB puede servir como un modelo base (benchmark) o como herramienta en tareas donde se prefiera simplicidad sobre precisión</p>
        <button onClick={() => navigate("/menu")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
        </button>
      </div>
    );
  }
  