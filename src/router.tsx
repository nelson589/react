import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Menu from "./pages/Menu";
import Graph1 from "./pages/Graph1";
import Graph2 from "./pages/Graph2";
import Analysis from "./pages/Analysis";
import Team from "./pages/Team";
import Predict from "./pages/Predict";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/graph1" element={<Graph1 />} />
        <Route path="/graph2" element={<Graph2 />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/team" element={<Team />} />
        <Route path="/predict" element={<Predict />} />

      </Routes>
    </BrowserRouter>
  );
}
