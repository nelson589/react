import { useNavigate } from "react-router-dom";
const members = [
    { name: "Felipe Camelo", major: "Ingeniería Industrial", img: "src/assets/images/pipefoto.jpeg" },
    { name: "Sergio Espejo", major: "Ingeniería Industrial", img: "src/assets/images/chechofoto.jpeg" },
    { name: "Nicolas Ospina", major: "Ingeniería Industrial", img: "src/assets/images/nicofoto.jpeg" },
    { name: "Nelson Salamanca León", major: "Ingeniería Industrial", img: "src/assets/images/nelsonfoto.jpeg" },
  ];
  
  export default function Team() {
    const navigate = useNavigate();
    return (
      <div className="grid grid-cols-2 gap-4 p-6">
        {members.map((member, idx) => (
          <div key={idx} className="text-center bg-white p-4 rounded shadow">
            <img src={member.img} alt={member.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="font-bold">{member.name}</h3>
            <p>{member.major}</p>
            <button onClick={() => navigate("/menu")} className="bg-white p-6 shadow rounded-lg text-center">
        volver
        </button>
          </div>
        ))}
      </div>
    );
  }
  