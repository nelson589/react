import { useNavigate } from "react-router-dom";
const members = [
    { name: "Juan Pérez", major: "Ingeniería Industrial", img: "/images/juan.jpg" },
    { name: "Ana López", major: "Ingeniería Industrial", img: "/images/ana.jpg" },
    { name: "Carlos Ruiz", major: "Ingeniería Industrial", img: "/images/carlos.jpg" },
    { name: "Luisa Gómez", major: "Ingeniería Industrial", img: "/images/luisa.jpg" },
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
  